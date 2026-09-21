import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleList.module.scss";
import { Article, ArticleView } from "./../../model/types/article";
import { ArticleListItem } from "./../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "./../ArticleListItem/ArticleListItemSkeleton";
import { Text } from "shared/ui";
import { TextSize } from "shared/ui/Text/Text";
import {
  HTMLAttributeAnchorTarget,
  useCallback,
  useEffect,
  useRef,
} from "react";
import {
  GridStateSnapshot,
  StateSnapshot,
  Virtuoso,
  VirtuosoGrid,
  VirtuosoHandle,
} from "react-virtuoso";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  scrollParent?: HTMLElement | null;
  sessionKey?: number;
  listState?: StateSnapshot;
  gridState?: GridStateSnapshot;
  onListStateChange?: (state: StateSnapshot) => void;
  onGridStateChange?: (state: GridStateSnapshot) => void;
}

type ArticleListContext = {
  isLoading?: boolean;
  view: ArticleView;
};

const getSkeleton = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 8 : 4)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton key={index} view={view} />);
};

const SkeletonFooter = ({ context }: { context?: ArticleListContext }) => {
  if (!context?.isLoading) {
    return null;
  }

  return <div className={cls.skeleton}>{getSkeleton(context.view)}</div>;
};

const virtuosoComponents = {
  Footer: SkeletonFooter,
};

export const ArticleList = (props: ArticleListProps) => {
  const {
    className,
    isLoading,
    articles,
    view = ArticleView.SMALL,
    target,
    scrollParent,
    sessionKey = 0,
    listState,
    gridState,
    onListStateChange,
    onGridStateChange,
  } = props;

  const virtuosoRef = useRef<VirtuosoHandle>(null);
  const listRestoreRef = useRef(listState);
  const gridRestoreRef = useRef(gridState);
  const restoreParamsRef = useRef({ view, sessionKey });
  const lastListStateRef = useRef<StateSnapshot | undefined>(listState);
  const lastGridStateRef = useRef<GridStateSnapshot | undefined>(gridState);
  const onListStateChangeRef = useRef(onListStateChange);
  const onGridStateChangeRef = useRef(onGridStateChange);

  onListStateChangeRef.current = onListStateChange;
  onGridStateChangeRef.current = onGridStateChange;

  if (restoreParamsRef.current.sessionKey !== sessionKey) {
    lastListStateRef.current = listState;
    lastGridStateRef.current = gridState;
  }

  if (
    restoreParamsRef.current.view !== view ||
    restoreParamsRef.current.sessionKey !== sessionKey
  ) {
    restoreParamsRef.current = { view, sessionKey };
    listRestoreRef.current = listState;
    gridRestoreRef.current = gridState;
  }

  const persistListStateToStore = useThrottle((state: StateSnapshot) => {
    onListStateChangeRef.current?.(state);
  }, 500);

  const persistGridStateToStore = useThrottle((state: GridStateSnapshot) => {
    onGridStateChangeRef.current?.(state);
  }, 500);

  const handleRangeChanged = useCallback(() => {
    virtuosoRef.current?.getState((state) => {
      lastListStateRef.current = state;
      persistListStateToStore(state);
    });
  }, [persistListStateToStore]);

  const handleGridStateChanged = useCallback(
    (state: GridStateSnapshot) => {
      lastGridStateRef.current = state;
      persistGridStateToStore(state);
    },
    [persistGridStateToStore],
  );

  const isViewEffectReady = useRef(false);

  useEffect(() => {
    if (!isViewEffectReady.current) {
      isViewEffectReady.current = true;
      return;
    }

    if (lastListStateRef.current) {
      onListStateChangeRef.current?.(lastListStateRef.current);
    }

    if (lastGridStateRef.current) {
      onGridStateChangeRef.current?.(lastGridStateRef.current);
    }
  }, [view]);

  useEffect(() => {
    return () => {
      if (virtuosoRef.current) {
        virtuosoRef.current.getState((state) => {
          onListStateChangeRef.current?.(state);
        });
      } else if (lastListStateRef.current) {
        onListStateChangeRef.current?.(lastListStateRef.current);
      }

      if (lastGridStateRef.current) {
        onGridStateChangeRef.current?.(lastGridStateRef.current);
      }
    };
  }, []);

  const renderArticle = useCallback(
    (_: number, article: Article) => (
      <ArticleListItem
        article={article}
        view={view}
        target={target}
        className={cls.cardItem}
      />
    ),
    [view, target],
  );

  const computeItemKey = useCallback(
    (_: number, article: Article) => article.id,
    [],
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={"Статьи не найдены"} />
      </div>
    );
  }

  const mods = {
    [cls.staticList]: !scrollParent,
  };

  const context: ArticleListContext = { isLoading, view };
  const canRestore = articles.length > 0;

  return (
    <div className={classNames(cls.ArticleList, mods, [className, cls[view]])}>
      {scrollParent && view === ArticleView.SMALL && (
        <VirtuosoGrid
          key={sessionKey}
          data={articles}
          customScrollParent={scrollParent}
          listClassName={cls.list}
          itemClassName={cls.card}
          computeItemKey={computeItemKey}
          context={context}
          components={virtuosoComponents}
          increaseViewportBy={200}
          restoreStateFrom={canRestore ? gridRestoreRef.current : undefined}
          stateChanged={handleGridStateChanged}
          itemContent={renderArticle}
        />
      )}
      {scrollParent && view === ArticleView.BIG && (
        <Virtuoso
          key={sessionKey}
          ref={virtuosoRef}
          data={articles}
          customScrollParent={scrollParent}
          computeItemKey={computeItemKey}
          defaultItemHeight={600}
          context={context}
          components={virtuosoComponents}
          increaseViewportBy={200}
          restoreStateFrom={canRestore ? listRestoreRef.current : undefined}
          rangeChanged={handleRangeChanged}
          itemContent={renderArticle}
        />
      )}
      {!scrollParent && (
        <>
          {articles.map((article) => (
            <ArticleListItem
              key={article.id}
              article={article}
              view={view}
              target={target}
              className={cls.cardItem}
            />
          ))}
          {isLoading && getSkeleton(view)}
        </>
      )}
    </div>
  );
};
