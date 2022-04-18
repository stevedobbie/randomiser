import React, { useState } from 'react'
import { 
  ChakraProvider,
  Container,
  Input, 
  Button } from '@chakra-ui/react'



  function App() {

  const [ formData, setFormData ] = useState({
    nameOne: '',
    nameTwo: '',
    nameThree: '',
    nameFour: '',
    nameFive: '',
    nameSix: '',
    nameSeven: '',
    nameEight: '',
    nameNine: '',
  })


  // *** PSEUDO CODE ***
  // Break out into components - 1st page has team members can add and remove, 2nd page has the calendar, 3rd shows the randomiser with text to be copied into Slack
  // Should be able view team member in a dropdown list
  // Can add or remove team members - stored as an array of objects with name and slackName
  // Select team member availability using Mon-Fri calendar - this pushes name objects into array for each day
  // Algorithm then selects day with fewest team members available and randomly picks a team member.
  // This team member is then removed from subsequent days. A team member is then selected for the next day with second fewest team members available, etc
  // Repeats until there is a team member selected for each day.  


  // Future improvements... 
  // window storage instead of hard copied names
  // re-randomise button

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(e.target.name)
    console.log(e.target.value)
  }

  return (

    <ChakraProvider>
      
      <Container m={5} p={10}>
        <Input
          className='form-field'
          type='text'
          name='nameOne'
          placeholder='nameOne' 
          onChange={handleChange}
        />
        
        
        
        <Button>Submit</Button>
      </Container>
      
      
      
      
      
    </ChakraProvider>
  )
}

export default App;
