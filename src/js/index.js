import {
  changeColorForImprovementSection,
  changeColorForBudgetSection,
  changeColorForControlSection,
  changeColorForPowerSection,
  changeMenuItemsColorToWhite,
  changeBackgroundColorToDefault,
  changeMenuItemsColorToDefault,
  changeCubeColorToDefault
} from './changeColor';
import { toggleCube, toggleCubes } from './toggleCubes';
import { changeActiveMenuLinkToBlack, changeActiveMenuLinkToRed } from './menu';
import { scrollParallaxBgLetters, scrollParallaxPattern } from './scrollParallax';

const superviseSection = window.document.querySelector('.supervise-section');
const expertiseSection = window.document.querySelector('.expertise-section');
const toolsetSection = window.document.querySelector('.toolset-section');
const advantageSection = window.document.querySelector('.advantage-section');
const budgetSection = window.document.querySelector('.budget-section');
const controlSection = window.document.querySelector('.control-section');
const powerSection = window.document.querySelector('.power-section');
const improvementSection = window.document.querySelector('.improvement-section');
const superviseSectionScrollPosition = superviseSection.offsetTop;
const expertiseSectionScrollPosition = expertiseSection.offsetTop;
const toolsetSectionScrollPosition = toolsetSection.offsetTop;
const advantageSectionScrollPosition = advantageSection.offsetTop;
const budgetSectionScrollPosition = budgetSection.offsetTop;
const controlSectionScrollPosition = controlSection.offsetTop;
const powerSectionScrollPosition = powerSection.offsetTop;
const improvementSectionScrollPosition = improvementSection.offsetTop;

initProject();

window.addEventListener('scroll', initProject);

function initProject() {
  const scrolled = window.pageYOffset;

  if (scrolled < advantageSectionScrollPosition || scrolled > improvementSectionScrollPosition) {
    changeBackgroundColorToDefault();
    changeCubeColorToDefault();
  }

  if (scrolled > budgetSectionScrollPosition && scrolled < powerSectionScrollPosition) {
    changeMenuItemsColorToWhite();
  }

  if (scrolled < budgetSectionScrollPosition || scrolled > improvementSectionScrollPosition) {
    changeMenuItemsColorToDefault();
  }

  if (scrolled >= advantageSectionScrollPosition && scrolled <= budgetSectionScrollPosition) {
    changeColorForBudgetSection(advantageSectionScrollPosition);
  }

  if (scrolled > budgetSectionScrollPosition && scrolled <= controlSectionScrollPosition) {
    changeColorForControlSection(budgetSectionScrollPosition);
  }

  if (scrolled > controlSectionScrollPosition && scrolled <= powerSectionScrollPosition) {
    changeColorForPowerSection(controlSectionScrollPosition);
  }

  if (scrolled > powerSectionScrollPosition && scrolled <= improvementSectionScrollPosition) {
    changeColorForImprovementSection(powerSectionScrollPosition);
  }

  if (scrolled > budgetSectionScrollPosition) {
    changeActiveMenuLinkToBlack();
  }

  if (scrolled < budgetSectionScrollPosition) {
    changeActiveMenuLinkToRed();
  }

  // For Parallax Scroll of Big Background letters
  const middlePositionOfAdvancedSection =
    advantageSectionScrollPosition + (budgetSectionScrollPosition - advantageSectionScrollPosition) / 2;
  const middlePositionOfBudgetSection =
    budgetSectionScrollPosition + (controlSectionScrollPosition - budgetSectionScrollPosition) / 2;
  const middlePositionOfControlSection =
    controlSectionScrollPosition + (powerSectionScrollPosition - controlSectionScrollPosition) / 2;
  const middlePositionOfPowerSection =
    powerSectionScrollPosition + (improvementSectionScrollPosition - powerSectionScrollPosition) / 2;

  if (scrolled >= middlePositionOfAdvancedSection && scrolled <= middlePositionOfBudgetSection) {
    const budgetBgLetter = window.document.querySelector('#budget > svg');
    scrollParallaxBgLetters(budgetBgLetter, budgetSectionScrollPosition, advantageSectionScrollPosition);
  }

  if (scrolled >= middlePositionOfBudgetSection && scrolled <= middlePositionOfControlSection) {
    const controlBgLetter = window.document.querySelector('#control > svg');
    scrollParallaxBgLetters(controlBgLetter, controlSectionScrollPosition, budgetSectionScrollPosition);
  }

  if (scrolled >= middlePositionOfControlSection && scrolled <= middlePositionOfPowerSection) {
    const powerBgLetter = window.document.querySelector('#power > svg');
    scrollParallaxBgLetters(powerBgLetter, powerSectionScrollPosition, controlSectionScrollPosition);
  }

  // For Parallax Scroll of patterns/squares
  if (scrolled < expertiseSectionScrollPosition) {
    const superviseElement = window.document.querySelector('#supervise .inner-section-image');
    scrollParallaxPattern(superviseElement, superviseSectionScrollPosition);
  }

  if (scrolled > expertiseSectionScrollPosition && scrolled < toolsetSectionScrollPosition) {
    const expertiseElement = window.document.querySelector('#expertise .inner-section-image');
    scrollParallaxPattern(expertiseElement, expertiseSectionScrollPosition);
  }

  if (scrolled > toolsetSectionScrollPosition && scrolled < advantageSectionScrollPosition) {
    const toolsetPattern = window.document.querySelector('#toolset .inner-section-image');
    scrollParallaxPattern(toolsetPattern, toolsetSectionScrollPosition);
  }

  if (scrolled > advantageSectionScrollPosition && scrolled < budgetSectionScrollPosition) {
    const advantagePattern = window.document.querySelector('#advantage .inner-section-image');
    scrollParallaxPattern(advantagePattern, advantageSectionScrollPosition);
  }

  if (scrolled > improvementSectionScrollPosition) {
    const improvementPattern = window.document.querySelector('#improvement .inner-section-image');
    scrollParallaxPattern(improvementPattern, improvementSectionScrollPosition);
  }

  toggleCube();
  toggleCubes();
}
