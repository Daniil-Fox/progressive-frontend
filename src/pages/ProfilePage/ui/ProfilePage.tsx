import {Page} from "widgets/Page";
import {VStack} from "shared/ui/Stack";
import {EditableProfileCard} from "features/editableProfileCard";
import {useParams} from "react-router-dom";

export interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const {id} = useParams()
    return (
        <Page className={className}>
            <VStack gap='16'>
                <EditableProfileCard id={id}/>
            </VStack>
        </Page>
    );
};

export default ProfilePage;