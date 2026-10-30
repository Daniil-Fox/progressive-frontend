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
            <RatingCard title={'Как вам статья?'} feedbackTitle={'Оставьте отзыв о статье'} hasFeedback/>
        </Page>
    );
}

export default MainPage;
