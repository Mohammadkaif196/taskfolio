import React from 'react';

function Education() {
  // Define the internal CSS using a style object
  const styles = {
    container: {
    // background:'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
      padding: '20px',
      borderRadius: '5px',
      margin: '0px',
    },
    title: {
      fontSize: '40px',
      fontWeight: 'bold',
    },
    school: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Education</h2>
      <div style={styles.school}>
        {
        <center>
         <table border="2">
            <tr><th>Categery</th><th>Name</th><th>percentage</th></tr>
            <tr><td>Tenth</td><td>Geethanjali School</td><td>100</td></tr>
            <tr><td>Intermediate</td><td>Sri Chaitanya</td><td>97.4</td></tr>
            <tr><td>Btech(current)</td><td>VIT-AP University</td><td>86.4(current)</td></tr>
         </table>
         </center>
        
        }
      </div>
    </div>
  );
}

export default Education;