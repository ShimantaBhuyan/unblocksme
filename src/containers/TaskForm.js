import React from "react";
import { v4 as uuid } from 'uuid';
import api from "../utils/api";

const TaskForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let data = {};
        for (var [key, value] of formData.entries()) { 
            data[key] = value;
        }
        // const data = {
        //     id: formData.get('taskId'),
        //     description: formData.get("description"),
        //     date: formData.get('date'),
        //     category: formData.get('category'),
        //     status: formData.get('status')
        // }
        console.log(data);
        api.appendToSpreadsheet(e, props.gapi, data);
        //api.login(formData.get('email'), formData.get('password'));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="taskId">Task ID</label>
                <input
                    type="text"
                    id="taskId"
                    name="id"
                    value={uuid()}
                    readOnly="readonly"
                />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                />
            </div>
            <div>
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                />
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select id="category" name="category">
                    <option value="default">Select status</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Recurring">Recurring</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>
            </div>
            <div>
                <label htmlFor="status">Status</label>
                <select id="status" name="status">
                    <option value="default">Select status</option>
                    <option value="active">Active</option>
                    <option value="overdue">Overdue</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <button>Submit</button>
        </form>
    );
}

export default TaskForm;