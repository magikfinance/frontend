import { Button, useWalletModal, ButtonProps } from '@pancakeswap/uikit'
import useAuth from 'hooks/useAuth'
// @ts-ignore
// eslint-disable-next-line import/extensions
import { useActiveHandle } from 'hooks/useEagerConnect.bmp.ts'
import { useTranslation } from '@pancakeswap/localization'
import Trans from './Trans'

const ConnectWalletButton = ({ children, ...props }: ButtonProps) => {
  const { t } = useTranslation()
  const { login } = useAuth()
  const handleActive = useActiveHandle()
  const { onPresentConnectModal } = useWalletModal(login, t)

  const handleClick = () => {
    if (typeof __NEZHA_BRIDGE__ !== 'undefined') {
      handleActive()
    } else {
      onPresentConnectModal()
    }
  }

  return (
    <Button onClick={handleClick} style={{ 
      backgroundColor: '#000000', 
      color: 'white', 
      padding: '6px', borderRadius: '12px', marginRight:'1%', marginLeft: '5%'}}>
      {children || <Trans>CONNECT WALLET</Trans>}
    </Button>
  )
}

export default ConnectWalletButton
