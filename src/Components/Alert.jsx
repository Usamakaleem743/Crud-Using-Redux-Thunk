

const  Alertmsg=(props)=> {
  return (
    <>
        <div className={`container-fluid py-3 m-0 bg-${props.alert.type}`} style={{textAlign:'center',color:'white'}} >
          {props.alert.msg}
        </div>
    </>
  );
}

export default Alertmsg;
