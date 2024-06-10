import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddFriend = () => {
    const [data,setData]=useState(
    {
        "name":"",
        "friendName":"",
        "friendNickName":"",
        "DescribeYourFriend":""
    })
    const InputHandler=(event)=>{
        setData({...data,[event.target.name]:[event.target.value]})
    }

    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={data.name} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name of Friend</label>
                            <input type="text" className="form-control" name="friendName" value={data.friendName} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Nickname of Friend</label>
                            <input type="text" className="form-control" name="friendNickName" value={data.friendNickName} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Describe your Friend</label>
                            <textarea id="" className="form-control" name="DescribeYourFriend" value={data.DescribeYourFriend} onChange={InputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddFriend