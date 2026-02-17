import './Usertable.css';

function UserRow(props) {
  const style = { color: props.young ? "red" : "black" };

  return (
    <tr style={style}>
      <td>{props.user.name}</td>
      <td>{props.formatAge(props.user.age)}</td>
      <td>{props.user.city}</td>
    </tr>
  );
}

export function UserTable(props) {

  if (!props.users || props.users.length === 0) {
    return <p>Пользователи отсутствуют</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Город</th>
        </tr>
      </thead>

      <tbody>
        { props.users.map(elem => <UserRow key = {elem.id} user = {elem} formatAge = {props.formatAge} young = {elem.age < 25}/>)}
      </tbody>
    </table>
  );
}

export default Usertable;