import CONST from 'src/assets/js/const';
import controller from 'src/components/controllers/ControllerMain';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import 'src/css/pages/Main.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileName: null,
            fileType: null
        }
    }

    handleUpload = (e) => {
        console.log("file change", e.target.files);
        const reader = new FileReader();
        const file = e.target.files[0];
        const { name, type } = controller.filnameParser(file.name);

        reader.onloadend = () => {
            this.setState({
                fileName: name,
                fileType: type
            });
        };
        reader.readAsDataURL(file);
    }

    changeFile = (e) => {
        console.log("changeFile");
        this.setState({ fileName: e.target.value })
    }

    render() {
        return (
            <div className="Main">
                <div className="Title SizeRes20 Bold">{CONST.TEXT.MAIN_TITLE}</div>
                <div className="Item">
                    <div className="Upload">
                        <div className="SubItem">
                            <input className="Hidden" id="file-upload" type="file" onChange={this.handleUpload} />
                            <button className="BackColorPrimary ColorWhite UploadButton">
                                <label htmlFor="file-upload" className="Button">
                                    {CONST.TEXT.FILE} {CONST.BUTTON.UPLOAD}
                                </label>
                            </button>
                        </div>
                        <div className="SubItem">
                            <TextField
                                id="file-name"
                                style={{ minWidth: 120 }}
                                label={`${CONST.TEXT.WORD_LIST} ${CONST.TEXT.NAME}`}
                                value={this.state.fileName || ''}
                                onChange={this.changeFile}
                            />
                        </div>
                        <div className="SubItem">
                            <TextField
                                id="difficulty"
                                style={{ minWidth: 120 }}
                                label={`${CONST.TEXT.DIFFICULTY} ${CONST.TEXT.SELECT}`}
                                value={this.state.fileName || ''}
                                onChange={this.changeFile}
                            />
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Main;
