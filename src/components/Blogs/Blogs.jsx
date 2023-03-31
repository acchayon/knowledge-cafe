import Accordion from 'react-bootstrap/Accordion';

function Blogs() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is the different between props and state?</Accordion.Header>
        <Accordion.Body>
          <p><strong>Props</strong> is used for send data. When we need to send data one to other component then we used Props. <br /> <br />
          <strong>State</strong> is used for use data in own component only. 
          <br /> <br />
          <strong> Difference : </strong> Props are used for send data one to other components but state can't sent data in other component. Props are immutable. This means we cannot modify props. But state can be modified. So, state is mutable.
          We only read props but we can read and write state.
          That is the difference between props and state.</p>


        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How to works useState?</Accordion.Header>
        <Accordion.Body>
          <p>
            <strong>UseState: </strong> allows to create a new state variable.
            In react we used usestate for store some dynamice data.
            when we use usestate in react firstly we import on this component.
            In usestate, we create 2 variable in object and declare an array in usestate.
            UseState takes just one argument which is the intial value, and returns a stateful value and a function to change it. <br />
            <br /> <br />
            There is syntax of useState:
              const[products, setProducts] = useState([]);
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What is the work of useEffect without data load?</Accordion.Header>
        <Accordion.Body>
          <p>
            When we need to use sideeffect, then we used useEffect. When we need to update dom then we used uesEffect.
            <br />
            useEffect(callback, dependencies) is the hook who manages the side-effects in functional components. callback argument is a function there put the side-effect logic. dependencies is a list of dependencies of the side-effect.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How does react work?</Accordion.Header>
        <Accordion.Body>
          <p>
            IN the work of react, it has nedd two node package. which is react and react dom.
            When we write a component this time it was pure javascript code.We need to convert js code in html code.React convert this js code to html code.Then this code we want to see in browser, there is we need to react dom.This process are working without reload.This why react work so faster.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Blogs;