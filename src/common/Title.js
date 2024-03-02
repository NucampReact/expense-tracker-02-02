// React Component = Function that returns JSX
function Title(data) {
  // data.message = 'change this value'; // not allowed
  // data is an object = { message: 'This is my title', className: 'some class', foo: 'bar' }
  return (
    <h1 className={data.className}>{data.message}</h1>
  )
}

export default Title;