interface Payment{
    amount:number;
    payType:string;
    account:string;
    code:string;
};
class Card{
    name : string;
    number: string;
    code : string;
    balance : number;
    limit :number;
};
class Debit extends Card{
    
};
class Credit extends Card{
    intrest: number;
};









































function point(a,b,c){


    return {
        x:a,
        y:b,
        z:c
    };
}

new point
point.x