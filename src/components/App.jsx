import Feedback from './Feedback/Feedback';
import Section from './Section/Section';
// import s from './App.module.css';

function App() {
  return (
    <>
      <Section title="Please leave feedback">
        <Feedback />
      </Section>
    </>
  );
}

export default App;

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         textTransform: 'uppercase',
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
