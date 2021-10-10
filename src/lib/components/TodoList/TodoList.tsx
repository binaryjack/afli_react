
import { FC, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./TodoList.css";

export type TodoItem = {
    id: string;
    text: string;
}


export const TodoList: FC = () => {

    const [items, setItems] = useState<TodoItem[]>([]);
    const [valueInput, setValueInput] = useState("");

    const deleteItem = (e: MouseEvent, id: string) => {
        console.log("delete", e, id);

        e.preventDefault();
        const newListFiltered = items.filter(o => o.id !== id);
        setItems(newListFiltered);
    }

    const addItem = (e: MouseEvent) => {
        console.log("add", e);

        e.preventDefault();
        if (!valueInput) return;
        const newList = [...items];
        newList.push({ id: uuidv4(), text: valueInput });
        setItems(newList);
        setValueInput("");
    }

    const onInputChanged = (val: string) => {

        setValueInput(val);
        console.log(valueInput);

    }

    return (
        <div className="todo-card">
            <form className="tofo-form">
                <h1>TodoList</h1>
                <ToDoInput updateInput={onInputChanged} inputValue={valueInput} />
                <ToDoBtn clickEvent={addItem} label={"Add"} />

            </form>
            {items?.length > 0 &&
                <ul>
                    {items.map((item, index) => {
                        return <ToDoLi key={index} item={item} removeAction={deleteItem} />
                    })}

                </ul>}
        </div>
    )
}

type ToDoLiProps = {
    item: TodoItem;
    removeAction: CallableFunction;
}

export const ToDoLi: FC<ToDoLiProps> = ({ item, removeAction }) => {

    return (<li id={item.id} ><span>{item.text}</span> <ToDoBtn id={item.id} clickEvent={removeAction} label={"Remove"} /> </li>)
}


type ToDoInputProps = {
    updateInput: CallableFunction;
    inputValue: string;
}


export const ToDoInput: FC<ToDoInputProps> = ({ updateInput, inputValue }) => {

    return (<input className="todo-card-input" type="text" onChange={(e) => updateInput(e.target.value)} value={inputValue} />)
}




type ToDoBtnProps = {
    id?: string;
    clickEvent: CallableFunction;
    label: string;
}
export const ToDoBtn: FC<ToDoBtnProps> = ({ id, clickEvent, label }) => {

    return (<button className="btn btn-danger" onClick={(e) => clickEvent(e, id)} >{label}</button>)
}
