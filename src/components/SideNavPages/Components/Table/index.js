import React from 'react';
import './style.styl';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow} from '../../../';
import TabsTemplate from '../../../TabsTemplate'

function createContent(props){
  
  function createData(name, calories, fat, carbs, protein){
    return {name, calories, fat, carbs, protein };
  }

  const data = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 3, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <Paper className="demo-table">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat (g)</TableCell>
            <TableCell align="right">Carbs (g)</TableCell>
            <TableCell align="right">Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

function TablePage(props){
  return(
    <div className='button-ex'>
      <TabsTemplate label="Table" content={createContent()}/>
    </div>
  )
}

export default TablePage;