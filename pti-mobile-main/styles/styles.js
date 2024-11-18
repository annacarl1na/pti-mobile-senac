import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    fontFamily: 'Optima',
    
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    paddingVertical: 8,
    textAlign: 'center',
    color: '#363636', // Modern subtle color
    fontFamily: 'Optima',
  },
  nome: {
    fontSize: 30,
    fontWeight: 'bold',
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#363636',
    color: '#363636', // Slightly softer black
    marginBottom: 170,
    textAlign: 'center',
    fontFamily: 'Optima', 
  },
  input: {
    height: 40,
    borderColor: '#A9A9A9',
    borderWidth: 1,
    borderRadius: 8, // Rounded corners for a modern look
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: '#1E90FF', // Slightly different shade of blue
    padding: 12,
    borderRadius: 8, // More rounded for a modern feel
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16, // Added for better readability
  },
  link: {
    color: '#1E90FF',
    textAlign: 'center',
    textDecorationLine: 'underline', // Added for link styling
  },
  patientItem: {
    padding: 10,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8, // Added for a softer look
  },
});

export default styles;
