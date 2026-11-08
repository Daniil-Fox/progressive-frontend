import {useTranslation} from "react-i18next";
import {BugButton} from "@/app/providers/ErrorBoundary";
import {Page} from "@/widgets/Page/ui/Page";
import {RatingCard} from "@/entities/RatingCard";

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <Page>
            <h1>{t("main")}</h1>
            <BugButton/>
            <RatingCard title={t('How do you like the article?')} feedbackTitle={t('Leave your feedback about the article')} hasFeedback/>
        </Page>
    );
}

export default MainPage;
