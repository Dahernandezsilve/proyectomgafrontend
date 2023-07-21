import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  activeTab: {
    backgroundColor: '#007bff',
  },
  container: {
    backgroundColor: '#f0f0f0',
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 60,
  },
  tabItem: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  tabText: {
    color: '#000',
  },
})

export default styles
