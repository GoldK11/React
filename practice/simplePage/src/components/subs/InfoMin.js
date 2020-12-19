import CONST from 'src/assets/const';
import HelpIcon from '@material-ui/icons/Help';
// import 'src/css/InfoMin.css';

function InfoMin(props) {
    const level = 8;
    const name = "워디";
    const id = "wordy";
    const email = "wordy@gmail.com";

    return (
        <div className="InfoMin">
            <div className="Title">
                <span className="ColorExtra Size34 Left">{CONST.TEXT.LEVEL}. {level}</span>
                <span className="ColorBody SizeRes34 Right Bold">{name}</span>
                <div className="ColorWarning">
                    <HelpIcon className="RoundButtonDarken" />
                </div>
            </div>
            <div className="Size16 Item">
                <span className="ColorExtra Left">{CONST.TEXT.ID}</span>
                <span className="ColorBody Right">{id}</span>
            </div>
            <div className="Size16 Item">
                <span className="ColorExtra Left">{CONST.TEXT.MAIL}</span>
                <span className="ColorBody Right">{email}</span>
            </div>
            <div className="Size14 Bottom">
                <div className="ButtonDarken ColorPrimary">{CONST.BUTTON.LOGOUT}</div>
                <div className="ButtonDarken ColorPrimary">{CONST.TEXT.PERSONAL}{CONST.TEXT.INFO} {CONST.BUTTON.EDIT}</div>
            </div>
        </div>
    )
}

export default InfoMin;
