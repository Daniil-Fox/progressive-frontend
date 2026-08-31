import { useTranslation } from "react-i18next";
import {BugButton} from "app/providers/ErrorBoundary";
import {useState} from "react";
import {Page} from "shared/ui/Page/Page";

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState("");
    return (
        <Page>
            <h1>{t("main")}</h1>
            <BugButton/>
        </Page>
    );
}

export default MainPage;
