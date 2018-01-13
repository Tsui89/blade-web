import React,{Component} from 'react';

import { Upload, Button, Icon, message } from 'antd';
import { List } from 'antd';
import reqwest from 'reqwest';

function ListItem(props) {
    const value = props.value;
    return (
        <li>
            {value}
        </li>
    );
}

function resultList(props) {
    const numbers = props.list;
    const listItems = numbers.map((item, index) =>
        //Key应当被放在ListItem元素中，而不是li节点中
        <ListItem value={item} key={index}/>
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}
class Check extends Component {
    state = {
        fileList: [],
        uploading: false,
    }
    handleUpload = () => {
        const { fileList } = this.state;
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('files[]', file);
        });

        this.setState({
            uploading: true,
        });

        // You can use any AJAX library you like
        reqwest({
            url: this.props.postUrl,
            method: 'post',
            processData: false,
            data: formData,
            success: (resp) => {
                this.setState({
                    fileList: [],
                    uploading: false,
                });
                this.props.rs = JSON.parse(resp.content)
                message.success('upload successfully.');
            },
            error: () => {
                this.setState({
                    uploading: false,
                });
                message.error('upload failed.');
            },
        });
    }


    render() {
        const { uploading } = this.state;
        const props = {
            action: this.props.postUrl,
            onRemove: (file) => {
                this.setState(({ fileList }) => {
                    const index = fileList.indexOf(file);
                    const newFileList = fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList,
                    };
                });
            },
            beforeUpload: (file) => {
                this.setState(({ fileList }) => ({
                    fileList: [...fileList, file],
                }));
                return false;
            },
            fileList: this.state.fileList,
        };

        return (
            <div >
                <div id="check">
                    <div id="upload">
                        <Upload {...props}>
                            <Button>
                                <Icon type="upload" /> Select File
                            </Button>
                        </Upload>

                    </div>
                    <div id="check_button">
                        <Button
                            className="upload-demo-start"
                            type="primary"
                            onClick={this.handleUpload}
                            disabled={this.state.fileList.length === 0}
                            loading={uploading}
                        >
                            {uploading ? '检测中' : '开始检测' }
                        </Button>
                    </div>
                </div>
                <div id="result" title="result">
                    <resultList numbers={this.state.rs}/>
                </div>
            </div>
        );
    }}

export default Check;