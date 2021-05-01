export class CustomService{

    private course=['Angular8','React JS','Vue JS','JSP'];

    private  prod=[
        {
            name:'LG',
            price:1000
        },
        {
            name:'Motorola',
            price:20000
        },
        {
            name:'Realme',
            price:15000
        }
    ]

    getCourse(){
        return (this.course);
    }

    getArrObj(){
        return(this.prod);
    }
}