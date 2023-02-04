import { useEffect, useState } from "react";


const TableData = ()=>{
    const [userList,setUserList] = useState([]);
    const [userData,setUserData] = useState([]);
    const [short,setSort] = useState("assinding");

    useEffect(()=>{
        fetch("https://randomuser.me/api?results=10")
        .then(response=>response.json())
        .then(result=>{
            setUserData(result.results);
            setUserList(result.results)
        }).catch(err=>{console.log(err)})
    },[]);



    const shortFunc = (name)=>{
        setSort(prevalue=>{
            if(prevalue === 'assinding'){
                return 'descending'
            }else{
                return 'assinding'
            }
        });

        setUserData(prevalue=>{
            let sortList = prevalue.sort((a,b)=>{
                if(name === "City"){
                    a = a.location.city
                    b = b.location.city
                }
                else if(name === "State"){
                    a = a.location.state
                    b = b.location.state
                }
                else if(name === "Country"){
                    a = a.location.country
                    b = b.location.country
                }
                else if(name === "postcode"){
                    a = a.location.postcode
                    b = b.location.postcode
                }
                else if(name === "Number"){
                    a = a.phone
                    b = b.phone
                }
                else if(name === "Name"){
                    a = a.name.first
                    b = b.name.first
                }

                if(a < b){
                    if(short === "assinding" ){
                     return -1;
                    }else{
                       return 1;
                    }
                }
                if(a > b){
                    if(short === "assinding" ){
                     return 1;
                    }else{
                     return -1;
                    }
                }
                return 0;
            });
          return [...sortList];
        })
    }
    
    const Search = (e)=>{
        if(e.target.value.length > 0){
            let filterData = userList.filter(elem=>{
                return elem.location.city.toUpperCase().includes(e.target.value.toUpperCase());
            })
            setUserData(filterData)
        }else{
            setUserData(userList)
        }
    }

    return (
        <>
            <div className="table_data_wrap">
                <div className="container">
                    <h2 className="heading">User List</h2>
                    <input type="search" placeholder="Search..." onInput={Search}/>
                    <table className="table_data_list">
                        <tr className="table_data_item">
                            <th><button onClick={()=>{shortFunc('City')}}>City</button></th>
                            <th><button onClick={()=>{shortFunc('State')}}>State</button></th>
                            <th><button onClick={()=>{shortFunc('Country')}}>Country</button></th>
                            <th><button onClick={()=>{shortFunc('postcode')}}>postcode</button></th>
                            <th><button onClick={()=>{shortFunc('Number')}}>Number</button></th>
                            <th><button onClick={()=>{shortFunc('Name')}}>Name</button></th>
                            <th><button onClick={()=>{shortFunc('Image')}}>Image</button></th>
                        </tr>
                        {userData.length > 0 &&
                            userData.map((elem)=>{
                                return (
                                <tr className="table_data_item">
                                    <td>{elem.location.city}</td>
                                    <td>{elem.location.state}</td>
                                    <td>{elem.location.country}</td>
                                    <td>{elem.location.postcode}</td>
                                    <td>{elem.phone}</td>
                                    <td>{elem.name.title} {elem.name.first} {elem.name.last}</td>
                                    <td>
                                        <img src={elem.picture.medium} alt={elem.name.first}></img>
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </table>
                    {userData.length === 0 && 
                        <h2 className="info_message">
                            There is No data Found
                        </h2>
                    }
                </div>
            </div>
        </>
    ) 
}
export default TableData;