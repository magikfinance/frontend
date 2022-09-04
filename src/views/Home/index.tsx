import styled from 'styled-components'
import PageSection from '../../components/PageSection'; 
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import MultipleBanner from './components/Banners/MultipleBanner'
import React from 'react'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()
  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }
  const { t } = useTranslation()
// guts
  return (
    <>
      <PageMeta /> 
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
            ? 'radial-gradient(329.58% 50% at 50% 50%, #3B2864 0%, #191326 100%)'
            : 'linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      > {/*
        {account && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )}
        <MultipleBanner /> */}
    
        <Hero />
      </StyledHeroSection>
      {/*
      <PageSection // used by millions trusted by billions 
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
            ? 'linear-gradient(180deg, #000000 0%, #201335 40%, #5517a2 80%)'
            : 'linear-gradient(180deg, #FFFFFF 22%, #D7CAEC 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        
      </PageSection> */}

      
  {/*    <PageSection // swap tokens with ease 
        innerProps={{ style: HomeSectionContainerStyles }}
     //   background={theme.colors.background}
          background={
            theme.isDark
              ? 'linear-gradient(180deg, #000000 0%, #201335 40%, #5517a2 80%)'
              : 'linear-gradient(180deg, #FFFFFF 22%, #D7CAEC 100%)'
          }
        index={2}
        hasCurvedDivider={false}  */}
          {/*
        <OuterWedgeWrapper>
          <InnerWedgeWrapper top fill={theme.isDark ? '#201335' : '#D8CBED'}>
            <WedgeTopLeft />
          </InnerWedgeWrapper>
      </OuterWedgeWrapper> */}
      {/*
      <MetricsSection />
    <SalesSection {...swapSectionData(t)} /> */}
   {/* earn passive income with your crypto*/} {/*  <OuterWedgeWrapper> 
          <InnerWedgeWrapper width="150%" top fill={theme.colors.background}>
            <WedgeTopRight />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
  <SalesSection {...earnSectionData(t)} /> */}
 {/*       <FarmsPoolsRow /> */}
    {/*  </PageSection> */}

{/*

      <PageSection
      // "earn passive income with your crypto" 
        innerProps={{ style: HomeSectionContainerStyles }}
      //  background={theme.colors.gradients.cardHeader}
      background={
        theme.isDark
          ? 'linear-gradient(180deg, #000000 0%, #201335 40%, #5517a2 80%)'
          : 'linear-gradient(180deg, #FFFFFF 22%, #D7CAEC 100%)'
      }
        index={2}
        hasCurvedDivider={false}
      > 
        
      </PageSection>
      
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={
          theme.isDark
            ? 'linear-gradient(180deg, #0B4576 0%, #091115 100%)'
            : 'linear-gradient(180deg, #6FB6F1 0%, #EAF2F6 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >

      <WinSection /> 
      </PageSection> 
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="linear-gradient(180deg, #5517a2 0%, #201335 40%, #000000 80%)"
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...cakeSectionData(t)} />
        <CakeDataRow />
      </PageSection>
      {/*
      <PageSection // little color wedge 
        innerProps={{ style: HomeSectionContainerStyles }}
        background="linear-gradient(180deg, #5517a2 0%, #201335 40%, #000000 80%)"
        index={2}
        hasCurvedDivider={false}
      >
       <Footer /> 
    </PageSection> */}
    </>
  )
}

export default Home
