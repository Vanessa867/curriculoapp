import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function TabsLayout() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#004a99',
          tabBarInactiveTintColor: '#779ecb',
          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof MaterialIcons.glyphMap = 'home';

            if (route.name === 'index') iconName = 'home';
            else if (route.name === 'sobre') iconName = 'info';
            else if (route.name === 'academica') iconName = 'school';
            else if (route.name === 'profissional') iconName = 'work';
            else if (route.name === 'projetos') iconName = 'folder';
            else if (route.name === 'jogo') iconName = 'sports-esports';

            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          headerShown: true,
          headerStyle: {
            backgroundColor: '#f0f6ff',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            color: '#003366',
            fontWeight: 'bold',
            fontSize: 20,
          },
        })}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f6ff',
  },
  tabBarStyle: {
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 65,
    shadowColor: '#003366',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
    paddingBottom: 8,
    paddingTop: 8,
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 10,
  },
});
