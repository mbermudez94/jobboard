import LightningElementWithBootstrap from "../../lib/lightningElementWithBootstrap";

export default class SearchBox extends LightningElementWithBootstrap{
    searchFields={
        title:'',
        candidate_required_location:'',
        job_type:''
    }
    
    changeHandler(event){
        const {name, value, checked} = event.target;
        if(name === 'job_type'){
            this.searchFields[name] = 'full_time';
        } else {
            this.searchFields[name] = value;
        }
    }

    searchHandler(){
        console.log(this.searchFields)
    }
}