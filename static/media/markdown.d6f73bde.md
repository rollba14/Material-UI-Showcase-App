```js
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const data = [
  {'Frozen yoghurt', 159, 6.0, 24, 4.0},
  {'Ice cream sandwich', 237, 9.0, 3, 4.3},
  {'Eclair', 262, 16.0, 24, 6.0},
  {'Cupcake', 305, 3.7, 67, 4.3},
  {'Gingerbread', 356, 16.0, 49, 3.9},
];

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
```
