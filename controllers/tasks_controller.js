const mongoose = require('mongoose');
const Tasks = require('../models/tasks')
module.exports.addTask = async function (req, res) {
    try {
        console.log(req.body);
        const data = await Tasks.create({ title: req.body.title, description: req.body.description });
        console.log(data);
        return res.status(200).json({ data: data });
    } catch (err) {
        console.log(err);
    }
}
module.exports.getTodos = async function (req, res) {
    try {
        const data = await Tasks.find({ status: "To Do" });
        // console.log(data);
        return res.status(200).json({ data: data });
    } catch (err) {
        console.log(err);
    }
}
module.exports.deleteTodo = async function (req, res) {
    try {
        console.log(req.params.id, 'hi my name is nikh');
        const data = await Tasks.findOne({ _id: req.params.id });
        await Tasks.deleteOne({ _id: req.params.id });
        return res.status(200).json({ data: data });
    } catch (err) {
        console.log(err);
    }
}
module.exports.editTask = async function (req, res) {
    try {
        const task = await Tasks.findOne({ _id: req.body.id });
        task.title = req.body.title;
        task.description = req.body.description;
        task.save();
        return res.status(200).json({ data: task });
    } catch (err) {
        console.log(err);
    }
}
module.exports.swapTodos = async function (req, res) {
    try {

        let destination = req.body[0];
        let source = req.body[1];
        if (source <= destination) {
            console.log(source, destination);
            const todos = await Tasks.find({ status: "To Do" });
            console.log(todos);
            let store = [];
            for (let i = 0; i < todos.length; i++) {
                console.log(i, source, destination);
                if (i >= source && i <= destination) {
                    store.push(todos[i]);
                }
            }
            // console.log(store);
            // console.log(store[0],'seeme');
            let store2 = JSON.parse(JSON.stringify(store));
            console.log(store2);
            let x = 1;
            for (let i = source; i <= destination - 1; i++) {
                const obj = todos[i];
                todos[i].title = store2[x].title;
                todos[i].description = store2[x].description;
                obj.title = store2[x].title;
                obj.description = store2[x].description;
                await obj.save();
                // console.log('hii',obj);
                x = x + 1;
            }
            const f = todos[destination];
            // console.log(f,'bye');
            f.title = store2[0].title;
            f.description = store2[0].description;
            // console.log(store2[0],'seeme');
            // console.log(f,'asdff')
            todos[destination].title = store2[0].title;
            todos[destination].description = store2[0].description;
            await f.save();
            return res.status(200).json({ data: todos });
        }else{
            const todos=await Tasks.find({status:"To Do"});
            let store=[];
            for(let i=0;i<=todos.length;i++){
                if(i>=destination&&i<=source){
                    store.push(todos[i]);
                }
            }
            let store2 = JSON.parse(JSON.stringify(store));
            let x=0;
            for(let i=destination+1;i<=source;i++){
                const obj = todos[i];
                todos[i].title = store2[x].title;
                todos[i].description = store2[x].description;
                obj.title = store2[x].title;
                obj.description = store2[x].description;
                await obj.save();
                x = x + 1;
            }
            const f=todos[destination];
            f.title=store2[store2.length-1].title;
            f.description=store2[store2.length-1].description;
            todos[destination].title=store2[store2.length-1].title;
            todos[destination].description=store2[store2.length-1].description;
            await f.save();
            return res.status(200).json({ data: todos });
        }

    } catch (err) {
        console.log(err);
    }
}
module.exports.swapDoing = async function (req, res) {
    try {
        let destination = req.body[0];
        let source = req.body[1];
        if (source <= destination) {
            console.log(source, destination);
            const doing = await Tasks.find({ status: "doing" });
            console.log(doing);
            let store = [];
            for (let i = 0; i < doing.length; i++) {
                console.log(i, source, destination);
                if (i >= source && i <= destination) {
                    store.push(doing[i]);
                }
            }
            // console.log(store);
            // console.log(store[0],'seeme');
            let store2 = JSON.parse(JSON.stringify(store));
            console.log(store2);
            let x = 1;
            for (let i = source; i <= destination - 1; i++) {
                const obj = doing[i];
                doing[i].title = store2[x].title;
                doing[i].description = store2[x].description;
                obj.title = store2[x].title;
                obj.description = store2[x].description;
                await obj.save();
                // console.log('hii',obj);
                x = x + 1;
            }
            const f = doing[destination];
            // console.log(f,'bye');
            f.title = store2[0].title;
            f.description = store2[0].description;
            // console.log(store2[0],'seeme');
            // console.log(f,'asdff')
            doing[destination].title = store2[0].title;
            doing[destination].description = store2[0].description;
            await f.save();
            return res.status(200).json({ data: doing });
        }else{
            const doing=await Tasks.find({status:"doing"});
            let store=[];
            for(let i=0;i<=doing.length;i++){
                if(i>=destination&&i<=source){
                    store.push(doing[i]);
                }
            }
            let store2 = JSON.parse(JSON.stringify(store));
            let x=0;
            for(let i=destination+1;i<=source;i++){
                const obj = doing[i];
                doing[i].title = store2[x].title;
                doing[i].description = store2[x].description;
                obj.title = store2[x].title;
                obj.description = store2[x].description;
                await obj.save();
                x = x + 1;
            }
            const f=doing[destination];
            f.title=store2[store2.length-1].title;
            f.description=store2[store2.length-1].description;
            doing[destination].title=store2[store2.length-1].title;
            doing[destination].description=store2[store2.length-1].description;
            await f.save();
            return res.status(200).json({ data: doing });
        }
    } catch (err) {
        console.log(err);
    }
}
module.exports.swapDone = async function (req, res) {
    try {
        let destination = req.body[0];
        let source = req.body[1];
        if (source <= destination) {
            console.log(source, destination);
            const done = await Tasks.find({ status: "done" });
            console.log(done);
            let store = [];
            for (let i = 0; i < done.length; i++) {
                console.log(i, source, destination);
                if (i >= source && i <= destination) {
                    store.push(done[i]);
                }
            }
            // console.log(store);
            // console.log(store[0],'seeme');
            let store2 = JSON.parse(JSON.stringify(store));
            console.log(store2);
            let x = 1;
            for (let i = source; i <= destination - 1; i++) {
                const obj = done[i];
                done[i].title = store2[x].title;
                done[i].description = store2[x].description;
                obj.title = store2[x].title;
                obj.description = store2[x].description;
                await obj.save();
                // console.log('hii',obj);
                x = x + 1;
            }
            const f = done[destination];
            // console.log(f,'bye');
            f.title = store2[0].title;
            f.description = store2[0].description;
            // console.log(store2[0],'seeme');
            // console.log(f,'asdff')
            done[destination].title = store2[0].title;
            done[destination].description = store2[0].description;
            await f.save();
            return res.status(200).json({ data: done });
        }else{
            const done=await Tasks.find({status:"done"});
            let store=[];
            for(let i=0;i<=done.length;i++){
                if(i>=destination&&i<=source){
                    store.push(done[i]);
                }
            }
            let store2 = JSON.parse(JSON.stringify(store));
            let x=0;
            for(let i=destination+1;i<=source;i++){
                const obj = done[i];
                done[i].title = store2[x].title;
                done[i].description = store2[x].description;
                obj.title = store2[x].title;
                obj.description = store2[x].description;
                await obj.save();
                x = x + 1;
            }
            const f=done[destination];
            f.title=store2[store2.length-1].title;
            f.description=store2[store2.length-1].description;
            done[destination].title=store2[store2.length-1].title;
            done[destination].description=store2[store2.length-1].description;
            await f.save();
            return res.status(200).json({ data: done });
        }
    } catch (err) {
        console.log(err);
    }
}
module.exports.changeToDoing = async function (req, res) {
    try {
        console.log(req.body);
        const task = await Tasks.findOne({ _id: req.body._id });
        let t = task.title;
        let d = task.description;
        console.log(t, d);
        await Tasks.deleteOne({ _id: req.body._id });
        console.log(t, d);
        const see = await Tasks.create({ title: t, description: d, status: "doing" });
        const doing = await Tasks.find({ status: "doing" });

        for (let i = req.body.destination; i <= doing.length - 2 && i >= 0; i++) {
            const obj1 = doing[doing.length - 1];
            const obj2 = doing[i];
            let title1 = obj1.title;
            let description1 = obj1.description;
            let title2 = obj2.title;
            let description2 = obj2.description;
            doing[i].title = title1;
            doing[i].description = description1;
            doing[doing.length - 1].title = title2;
            doing[doing.length - 1].description = description2;
            obj1.title = title2;
            obj1.description = description2;
            obj2.title = title1;
            obj2.description = description1;
            await obj1.save();
            await obj2.save();
        }
        let obj = {};
        obj._id = req.body._id;
        obj.title = t;
        obj.description = d;
        obj.index = req.body.destination;
        console.log(doing);
        return res.status(200).json({ data: doing });
    } catch (err) {
        console.log(err);
    }
}
module.exports.changeToTodo = async function (req, res) {
    try {
        console.log(req.body, 'hiiiiii');
        const task = await Tasks.findOne({ _id: req.body._id });
        let t = task.title;
        let d = task.description;
        console.log(t, d);
        await Tasks.deleteOne({ _id: req.body._id });
        console.log(t, d);
        const see = await Tasks.create({ title: t, description: d, status: "To Do" });
        const todos = await Tasks.find({ status: "To Do" });

        for (let i = req.body.destination; i <= todos.length - 2 && i >= 0; i++) {
            const obj1 = todos[todos.length - 1];
            const obj2 = todos[i];
            let title1 = obj1.title;
            let description1 = obj1.description;
            let title2 = obj2.title;
            let description2 = obj2.description;
            todos[i].title = title1;
            todos[i].description = description1;
            todos[todos.length - 1].title = title2;
            todos[todos.length - 1].description = description2;
            obj1.title = title2;
            obj1.description = description2;
            obj2.title = title1;
            obj2.description = description1;
            await obj1.save();
            await obj2.save();
        }
        let obj = {};
        obj._id = req.body._id;
        obj.title = t;
        obj.description = d;
        obj.index = req.body.destination;
        // console.log(doing);
        return res.status(200).json({ data: todos });
    } catch (err) {
        console.log(err);
    }
}
module.exports.changeToDone = async function (req, res) {
    try {
        console.log(req.body);
        const task = await Tasks.findOne({ _id: req.body._id });
        let t = task.title;
        let d = task.description;
        console.log(t, d);
        await Tasks.deleteOne({ _id: req.body._id });
        console.log(t, d);
        const see = await Tasks.create({ title: t, description: d, status: "done" });
        const done = await Tasks.find({ status: "done" });
        console.log(done);
        for (let i = req.body.destination; i <= done.length - 2 && i >= 0; i++) {
            const obj1 = done[done.length - 1];
            const obj2 = done[i];
            let title1 = obj1.title;
            let description1 = obj1.description;
            let title2 = obj2.title;
            let description2 = obj2.description;
            done[i].title = title1;
            done[i].description = description1;
            done[done.length - 1].title = title2;
            done[done.length - 1].description = description2;
            obj1.title = title2;
            obj1.description = description2;
            obj2.title = title1;
            obj2.description = description1;
            await obj1.save();
            await obj2.save();
        }
        let obj = {};
        obj._id = req.body._id;
        obj.title = t;
        obj.description = d;
        obj.index = req.body.destination;


        console.log(done);
        return res.status(200).json({ data: done });
    } catch (err) {
        console.log(err);
    }
}
module.exports.getDoing = async function (req, res) {
    try {
        const data = await Tasks.find({ status: "doing" });
        // console.log(data);
        return res.status(200).json({ data: data });
    } catch (err) {
        console.log(err);
    }
}
module.exports.getDone = async function (req, res) {
    try {
        const data = await Tasks.find({ status: "done" });
        // console.log(data);
        return res.status(200).json({ data: data });
    } catch (err) {
        console.log(err);
    }
}