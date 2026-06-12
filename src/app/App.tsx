import "./style/index.scss";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import { useTheme } from "shared/lib/theme/useTheme";
import { AppRouter } from "./routes";
import {Suspense} from "react";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar";

const App = () => {

    const { theme, switchTheme } = useTheme();
    const className = classNames("app", {}, [theme]);
    return (
        <div className={className}>
            <Suspense fallback="">
                <Navbar />
                <div className="page">
                    <Sidebar />
                    <div className="page-wrapper">
                        <AppRouter />
                    </div>
                </div>
            </Suspense>
        </div>
    );
}

export default App;
