import { FC, useState, useEffect } from "react";

interface MyArrProps {
  arr: number[];
  fn: (val: number) => boolean;
}



export const MyArrComponent: FC<MyArrProps> = ({arr, fn}) => {

  const [newArr, setNewArr] = useState<number[]>([]);



  useEffect(() => {
     for (let i = 0; 1 < arr.length; i++) {

  //     //     if (fn(arr[i])) {
         console.log(arr[i]);
  //     //      // newArr.push(arr[i]);
  //     //     }
    }
  }, [arr, newArr]);

  return (
    <ul>

      {fn(90) ? 1 : 0 }
        { arr?.length > 0 &&  arr.map((item) => 
        <li>{item}</li>
        )}
    </ul>
  );
   
 };
 




export const MyView: FC = () => {

    const [array, setArray ] = useState<number[]>([123,53,23,52,36,26]);
    const calc = (val:number) => val > 100;
    
   return (
     <>
      <MyArrComponent arr={array} fn={calc}  />
     </>
   );
 };
 
 

 interface Props {
  name: string;
}



export const MyComponent: FC<Props> = (props) => {

  return (
    <>
      <div>{props.name}</div>
    </>
  );
};


interface BtnProps {
}

export const CButton: FC<BtnProps> = (props) => {


  return (
    <>

    </>
  );
};



