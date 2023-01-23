import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'
export function HabitsEmpty() {
  const { navigate } = useNavigation()

  return (
    <Text className="text-zinc-400 text-base">
      Você ainda não está monitorando nenhum hábito{' '}
      <Text
        onPress={() => navigate('new')}
        className="text-violet-400 text-base underline active:violet-500"
      >
        Comece cadastrando um.
      </Text>
    </Text>
  )
}
