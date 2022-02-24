import LightningElementWithBootstrap from "../../lib/lightningElementWithBootstrap";

export default class SearchBox extends LightningElementWithBootstrap{
    searchFields={
        description:'',
        category:'',
        job_type:''
    }
    catoptions =[
        {
            "id": 19,
            "name": "Software Development",
            "slug": "software-dev"
        },
        {
            "id": 18,
            "name": "Customer Service",
            "slug": "customer-support"
        },
        {
            "id": 21,
            "name": "Design",
            "slug": "design"
        },
        {
            "id": 28,
            "name": "Marketing",
            "slug": "marketing"
        },
        {
            "id": 30,
            "name": "Sales",
            "slug": "sales"
        },
        {
            "id": 23,
            "name": "Product",
            "slug": "product"
        },
        {
            "id": 33,
            "name": "Business",
            "slug": "business"
        },
        {
            "id": 24,
            "name": "Data",
            "slug": "data"
        },
        {
            "id": 25,
            "name": "DevOps / Sysadmin",
            "slug": "devops"
        },
        {
            "id": 26,
            "name": "Finance / Legal",
            "slug": "finance-legal"
        },
        {
            "id": 27,
            "name": "Human Resources",
            "slug": "hr"
        },
        {
            "id": 29,
            "name": "QA",
            "slug": "qa"
        },
        {
            "id": 32,
            "name": "Writing",
            "slug": "writing"
        },
        {
            "id": 22,
            "name": "All others",
            "slug": "all-others"
        }
    ]
    
    changeHandler(event){
        const {name, value} = event.target;
        console.log(name, value)
        if(name === 'job_type'){
            if(this.searchFields[name]==''){
                this.searchFields[name] = 'full_time';
            } else {
                this.searchFields[name] = ''
            }
        } else {
            this.searchFields[name] = value;
        }
    }

    searchHandler(){
        console.log(this.searchFields)
        this.dispatchEvent(new CustomEvent('filtersearch',{
            detail: this.searchFields
        }))
    }

    catHandler(event){
        console.log(event.target.value)
        this.searchFields.category=event.target.value;
    }
}