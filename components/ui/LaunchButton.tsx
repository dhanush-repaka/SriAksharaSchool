import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import { LEARNING_BUDDY_URL } from '@/lib/site'

export default function LaunchButton({
  className = '',
  variant = 'gold',
  label = 'Launch Learning Buddy',
}: {
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold' | 'inverse'
  label?: string
}) {
  return (
    <Button href={LEARNING_BUDDY_URL} variant={variant} className={className} external>
      {label}
      <Icon name="arrow" className="h-4 w-4" />
    </Button>
  )
}
