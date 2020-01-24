import React, {Component} from 'react'


  const TableHeader = () => {
      return (
        <thead>
          <tr>
            <th> Name </th>
            <th> Job </th>
            <th> Weapon </th>
            <th> Ultimate </th>
            <th> Remove Item </th>
          </tr>
        </thead>
      )
    }
    const TableBody = props => {
      const myRows = props.characterData.map((row,index) => {
        return(
          <tr key={index}>

            <td> {row.name} </td>
            <td> {row.job} </td>
            <td> {row.weapon} </td>
            <td> {row.ultimate} </td>
            <td>
              <button onClick={() => props.removeCharacter(index)}> Remove </button>
            </td>
          </tr>
        )
      })

      return <tbody> { myRows} </tbody>

    }
    const Table = (props) =>{
      const {characterData, removeCharacter } = props;

      return(
        <table>
          <TableHeader />
          <TableBody characterData ={characterData} removeCharacter={removeCharacter}/>
        </table>
      )
    }



export default Table
