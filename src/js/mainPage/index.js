import Swiper from 'swiper';

import {
  changeColorForImprovementSection,
  changeColorForBudgetSection,
  changeColorForControlSection,
  changeColorForPowerSection,
  changeCubeColorToDefault
} from '../changeColor';
import {
  cubesRandomLevitation,
  makeMainCubeBigger,
  transformMainCubeToDefaultSize,
  mainCubeToDefaultSize,
  moveCubesToTopForColorSections,
  moveCubesToDefaultPosition,
  moveCubesToTopForWhiteSections
} from '../cubesAnimation';
import { RATE_WSXGA_SCROLL, WSXGA_ANIMATION_DELAY, WSGA_ANIMATION_DELAY, MAIN_PAGE_TOGGLE_CONTENT } from '../constants';

import { toggleMenuListener } from '../toggleMenu';
import hoverLinkInMenu from '../hoverLinkInMenu';
import toggleContentByScroll from '../toggleContentByScroll';
import { sectionImageParallax } from '../scrollParallax';
import getScrollPosition from '../getScrollPosition';

import changeHeaderVisibility from '../menuAnimation';
import isWSXGABreakpoint from '../isWSXGABreakpoint';

const state = { prevScrollPosition: 0, isDefaultParams: false };

window.onload = () => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  recalculateScrollDependencies();
  toggleMenuListener();
  hoverLinkInMenu();
  cubesRandomLevitation();

  (() =>
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    }))();

  window.requestAnimationFrame(handleScrollChange);
};

function handleScrollChange() {
  const scrollPosition = getScrollPosition();

  if (state.prevScrollPosition !== scrollPosition) {
    recalculateScrollDependencies();
  }

  state.prevScrollPosition = scrollPosition;
  window.requestAnimationFrame(handleScrollChange);
}

function recalculateScrollDependencies() {
  const superviseSection = window.document.querySelector('.supervise-section');
  const expertiseSection = window.document.querySelector('.expertise-section');
  const toolsetSection = window.document.querySelector('.toolset-section');
  const advantageSection = window.document.querySelector('.advantage-section');
  const budgetSection = window.document.querySelector('.budget-section');
  const controlSection = window.document.querySelector('.control-section');
  const powerSection = window.document.querySelector('.power-section');
  const improvementSection = window.document.querySelector('.improvement-section');

  const superviseElement = window.document.querySelector('#supervise .inner-section-image');
  const advantagePattern = window.document.querySelector('#advantage .inner-section-image');
  const toolsetPattern = window.document.querySelector('#toolset .inner-section-image');
  const improvementPattern = window.document.querySelector('#improvement .inner-section-image');
  const expertiseElement = window.document.querySelector('#expertise .inner-section-image');

  const superviseSectionScrollPosition = superviseSection.offsetTop;
  const expertiseSectionScrollPosition = expertiseSection.offsetTop;
  const toolsetSectionScrollPosition = toolsetSection.offsetTop;
  const advantageSectionScrollPosition = advantageSection.offsetTop;
  const budgetSectionScrollPosition = budgetSection.offsetTop;
  const controlSectionScrollPosition = controlSection.offsetTop;
  const powerSectionScrollPosition = powerSection.offsetTop;
  const improvementSectionScrollPosition = improvementSection.offsetTop;

  const scrollPosition = getScrollPosition();

  if (
    !state.isDefaultParams &&
    (scrollPosition < advantageSectionScrollPosition || scrollPosition > improvementSectionScrollPosition)
  ) {
    state.isDefaultParams = true;
    changeCubeColorToDefault();
    mainCubeToDefaultSize();
    moveCubesToTopForWhiteSections(superviseSectionScrollPosition, advantageSectionScrollPosition);
  }

  if (scrollPosition >= advantageSectionScrollPosition && scrollPosition <= budgetSectionScrollPosition) {
    state.isDefaultParams = false;
    changeColorForBudgetSection(advantageSectionScrollPosition);
    moveFirstLetter('.budget-section');
  }

  if (scrollPosition >= advantageSectionScrollPosition && scrollPosition <= powerSectionScrollPosition) {
    state.isDefaultParams = false;
    makeMainCubeBigger(advantageSectionScrollPosition);
    moveCubesToTopForColorSections(advantageSectionScrollPosition);
  }

  if (scrollPosition > budgetSectionScrollPosition && scrollPosition <= controlSectionScrollPosition) {
    state.isDefaultParams = false;
    changeColorForControlSection(budgetSectionScrollPosition);
    moveFirstLetter('.control-section');
  }

  if (scrollPosition > controlSectionScrollPosition && scrollPosition <= powerSectionScrollPosition) {
    state.isDefaultParams = false;
    changeColorForPowerSection(controlSectionScrollPosition);
    moveFirstLetter('.power-section');
  }

  if (scrollPosition > powerSectionScrollPosition && scrollPosition <= improvementSectionScrollPosition) {
    state.isDefaultParams = false;
    const scrollDelayForAnimation = isWSXGABreakpoint() ? WSXGA_ANIMATION_DELAY : WSGA_ANIMATION_DELAY;

    const sectionScrollPosition = powerSectionScrollPosition + scrollDelayForAnimation;
    changeColorForImprovementSection(sectionScrollPosition);
    transformMainCubeToDefaultSize(sectionScrollPosition);
    moveCubesToDefaultPosition(sectionScrollPosition);
  }

  // For Parallax Scroll of patterns/squares
  const middleOfScreenHeight = RATE_WSXGA_SCROLL / 2;
  const middleOfScreenBeforeSuperviseSection = superviseSectionScrollPosition - middleOfScreenHeight;
  const middleOfScreenBeforeExpertiseSection = expertiseSectionScrollPosition - middleOfScreenHeight;
  const middleOfScreenAfterExpertiseSection = expertiseSectionScrollPosition + middleOfScreenHeight;
  const middleOfScreenBeforeToolsetSection = toolsetSectionScrollPosition - middleOfScreenHeight;
  const middleOfScreenAfterToolsetSection = toolsetSectionScrollPosition + middleOfScreenHeight;
  const middleOfScreenBeforeAdvantageSection = advantageSectionScrollPosition - middleOfScreenHeight;
  const middleOfScreenAfterAdvantageSection = advantageSectionScrollPosition + middleOfScreenHeight;
  const middleOfScreenBeforeImprovementSection = improvementSectionScrollPosition - middleOfScreenHeight;

  if (scrollPosition < middleOfScreenBeforeExpertiseSection) {
    sectionImageParallax(superviseElement, middleOfScreenBeforeSuperviseSection);
  }

  if (scrollPosition > middleOfScreenBeforeExpertiseSection && scrollPosition < middleOfScreenAfterExpertiseSection) {
    sectionImageParallax(expertiseElement, middleOfScreenBeforeExpertiseSection);
  }

  if (scrollPosition > middleOfScreenBeforeToolsetSection && scrollPosition < middleOfScreenAfterToolsetSection) {
    sectionImageParallax(toolsetPattern, middleOfScreenBeforeToolsetSection);
  }

  if (scrollPosition > middleOfScreenBeforeAdvantageSection && scrollPosition < middleOfScreenAfterAdvantageSection) {
    sectionImageParallax(advantagePattern, middleOfScreenBeforeAdvantageSection);
  }

  if (scrollPosition > middleOfScreenBeforeImprovementSection) {
    sectionImageParallax(improvementPattern, middleOfScreenBeforeImprovementSection);
  }

  toggleContentByScroll(MAIN_PAGE_TOGGLE_CONTENT.sectionContainer, MAIN_PAGE_TOGGLE_CONTENT.delayBetweenSection);
  changeHeaderVisibility(state.prevScrollPosition, scrollPosition);
}

function moveFirstLetter(parentSelector) {
  const sectionElement = document.querySelector(parentSelector);
  const firstLetterElement = document.querySelector(`${parentSelector} .letter-parallax`);
  const scrollPosition = getScrollPosition();

  const value = sectionElement.offsetTop - scrollPosition;
  const translate = `translateY(${value}px)`;

  if (firstLetterElement.style.transform !== translate) {
    firstLetterElement.style.transform = translate;
  }
}
