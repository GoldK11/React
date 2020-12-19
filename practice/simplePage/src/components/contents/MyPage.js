import 'src/css/MyPage.css';
import Profile from 'src/components/subs/Profile';
import InfoMin from 'src/components/subs/InfoMin';
import GridList from 'src/components/subs/GridList';
import CustomField from 'src/components/subs/CustomField';

function MyPage(props) {
    return (
        <div className="MyPage">
            <Profile></Profile>
            <InfoMin></InfoMin>
            <GridList></GridList>
            <CustomField></CustomField>
        </div>
    )
}

export default MyPage;
