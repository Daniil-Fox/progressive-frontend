import { useTranslation } from "react-i18next";
import {BugButton} from "app/providers/ErrorBoundary";
import {useState} from "react";

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState("");
    return <>
        <h1>{t("main")}</h1>
        <BugButton/>
    </>;
}

export default MainPage;
