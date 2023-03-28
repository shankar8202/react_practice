import styled from 'styled-components';
const FlexDiv=styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:10px;
padding:15px;
margin-top:20px;
border:1px solid silver;
width:250px;
background-color:grey;
border-radius:20px;
`

 const MainDiv=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between
`

 const Img=styled.img`
width:300px;
height:300px`

 const TitleDiv=styled.div`
height:20px`
const FetchItem = (props) => {
  let { id, title, image, price } = props.item;
  return (
    <FlexDiv>
      <div><strong>Id : - </strong>{id}</div>
      <TitleDiv><strong>Title :</strong> {title}</TitleDiv>
      <Img src={image} alt="" />
      <div>Price : {price}</div>
    </FlexDiv>
  );
};

export default FetchItem;