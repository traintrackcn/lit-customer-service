// import JSONInput from 'react-json-editor-ajrm';
// import locale    from 'react-json-editor-ajrm/locale/en';
import React, { PureComponent } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/monokai';


export default class LITJSONField extends PureComponent{

    constructor(){
        super();
        this.onChange = this.onChange.bind(this);
        this.onValidate = this.onValidate.bind(this);
    }

    onChange(newValue){
        // console.log('newValue -> '+newValue);
        this.newValue = newValue;
    }

    onValidate(validation){

        let newValue = this.newValue;
        let changed = false;

        if (!newValue){ //skip default value validation
            return;
        }

        console.log('validation -> '+JSON.stringify(validation,null, 2));
        if (validation.length){
            newValue = undefined;
            changed = false;
        }else{
            newValue = JSON.parse(newValue);
            const value = this.props.value;
            changed = !(JSON.stringify(value) === JSON.stringify(newValue) );
        }
        

        if (this.props.onChange){
            this.props.onChange({newValue, changed});
        }

        this.newValue = undefined;

    }

    render() {
        console.log('render()');
        let value = {};
        if (this.props.value) value = this.props.value;
        return (
            <AceEditor
                mode="json"
                theme="monokai"
                name="ace_editor_1"
                height="100%"
                width="100%"
                fontSize="16px"
                editorProps={{$blockScrolling: true}}
                onChange={this.onChange}
                highlightActiveLine={true}
                onValidate={this.onValidate}
                // showPrintMargin={true}
                // showGutter={true}
                // readOnly={true}
                value={JSON.stringify(value, null, 2)}
                setOptions={{
                    // enableBasicAutocompletion: false,
                    // enableLiveAutocompletion: false,
                    // enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                }}
            />
        );

    }
}
    