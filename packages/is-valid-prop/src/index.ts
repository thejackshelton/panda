const userGenerated: string[] = []

const uniq = (arr: string[]) => Array.from(new Set(arr))

const allCssProperties = uniq([
  'MsAccelerator',
  'MsBlockProgression',
  'MsContentZoomChaining',
  'MsContentZooming',
  'MsContentZoomLimit',
  'MsContentZoomLimitMax',
  'MsContentZoomLimitMin',
  'MsContentZoomSnap',
  'MsContentZoomSnapPoints',
  'MsContentZoomSnapType',
  'MsFilter',
  'MsFlowFrom',
  'MsFlowInto',
  'MsGridColumns',
  'MsGridRows',
  'MsHighContrastAdjust',
  'MsHyphenateLimitChars',
  'MsHyphenateLimitLines',
  'MsHyphenateLimitZone',
  'MsImeAlign',
  'MsOverflowStyle',
  'MsScrollbar3dlightColor',
  'MsScrollbarArrowColor',
  'MsScrollbarBaseColor',
  'MsScrollbarDarkshadowColor',
  'MsScrollbarFaceColor',
  'MsScrollbarHighlightColor',
  'MsScrollbarShadowColor',
  'MsScrollbarTrackColor',
  'MsScrollChaining',
  'MsScrollLimit',
  'MsScrollLimitXMax',
  'MsScrollLimitXMin',
  'MsScrollLimitYMax',
  'MsScrollLimitYMin',
  'MsScrollRails',
  'MsScrollSnapPointsX',
  'MsScrollSnapPointsY',
  'MsScrollSnapType',
  'MsScrollSnapX',
  'MsScrollSnapY',
  'MsScrollTranslation',
  'MsTextAutospace',
  'MsTouchSelect',
  'MsUserSelect',
  'MsWrapFlow',
  'MsWrapMargin',
  'MsWrapThrough',
  'MozAppearance',
  'MozBinding',
  'MozBorderBottomColors',
  'MozBorderLeftColors',
  'MozBorderRightColors',
  'MozBorderTopColors',
  'MozContextProperties',
  'MozFloatEdge',
  'MozForceBrokenImageIcon',
  'MozImageRegion',
  'MozOrient',
  'MozOutlineRadius',
  'MozOutlineRadiusBottomleft',
  'MozOutlineRadiusBottomright',
  'MozOutlineRadiusTopleft',
  'MozOutlineRadiusTopright',
  'MozStackSizing',
  'MozTextBlink',
  'MozUserFocus',
  'MozUserInput',
  'MozUserModify',
  'MozWindowDragging',
  'MozWindowShadow',
  'WebkitAppearance',
  'WebkitBorderBefore',
  'WebkitBorderBeforeColor',
  'WebkitBorderBeforeStyle',
  'WebkitBorderBeforeWidth',
  'WebkitBoxReflect',
  'WebkitLineClamp',
  'WebkitMask',
  'WebkitMaskAttachment',
  'WebkitMaskClip',
  'WebkitMaskComposite',
  'WebkitMaskImage',
  'WebkitMaskOrigin',
  'WebkitMaskPosition',
  'WebkitMaskPositionX',
  'WebkitMaskPositionY',
  'WebkitMaskRepeat',
  'WebkitMaskRepeatX',
  'WebkitMaskRepeatY',
  'WebkitMaskSize',
  'WebkitOverflowScrolling',
  'WebkitTapHighlightColor',
  'WebkitTextFillColor',
  'WebkitTextStroke',
  'WebkitTextStrokeColor',
  'WebkitTextStrokeWidth',
  'WebkitTouchCallout',
  'WebkitUserModify',
  'accentColor',
  'alignContent',
  'alignItems',
  'alignSelf',
  'alignTracks',
  'all',
  'animation',
  'animationComposition',
  'animationDelay',
  'animationDirection',
  'animationDuration',
  'animationFillMode',
  'animationIterationCount',
  'animationName',
  'animationPlayState',
  'animationTimingFunction',
  'animationTimeline',
  'appearance',
  'aspectRatio',
  'azimuth',
  'backdropFilter',
  'backfaceVisibility',
  'background',
  'backgroundAttachment',
  'backgroundBlendMode',
  'backgroundClip',
  'backgroundColor',
  'backgroundImage',
  'backgroundOrigin',
  'backgroundPosition',
  'backgroundPositionX',
  'backgroundPositionY',
  'backgroundRepeat',
  'backgroundSize',
  'blockOverflow',
  'blockSize',
  'border',
  'borderBlock',
  'borderBlockColor',
  'borderBlockStyle',
  'borderBlockWidth',
  'borderBlockEnd',
  'borderBlockEndColor',
  'borderBlockEndStyle',
  'borderBlockEndWidth',
  'borderBlockStart',
  'borderBlockStartColor',
  'borderBlockStartStyle',
  'borderBlockStartWidth',
  'borderBottom',
  'borderBottomColor',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderBottomStyle',
  'borderBottomWidth',
  'borderCollapse',
  'borderColor',
  'borderEndEndRadius',
  'borderEndStartRadius',
  'borderImage',
  'borderImageOutset',
  'borderImageRepeat',
  'borderImageSlice',
  'borderImageSource',
  'borderImageWidth',
  'borderInline',
  'borderInlineEnd',
  'borderInlineColor',
  'borderInlineStyle',
  'borderInlineWidth',
  'borderInlineEndColor',
  'borderInlineEndStyle',
  'borderInlineEndWidth',
  'borderInlineStart',
  'borderInlineStartColor',
  'borderInlineStartStyle',
  'borderInlineStartWidth',
  'borderLeft',
  'borderLeftColor',
  'borderLeftStyle',
  'borderLeftWidth',
  'borderRadius',
  'borderRight',
  'borderRightColor',
  'borderRightStyle',
  'borderRightWidth',
  'borderSpacing',
  'borderStartEndRadius',
  'borderStartStartRadius',
  'borderStyle',
  'borderTop',
  'borderTopColor',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderTopStyle',
  'borderTopWidth',
  'borderWidth',
  'bottom',
  'boxAlign',
  'boxDecorationBreak',
  'boxDirection',
  'boxFlex',
  'boxFlexGroup',
  'boxLines',
  'boxOrdinalGroup',
  'boxOrient',
  'boxPack',
  'boxShadow',
  'boxSizing',
  'breakAfter',
  'breakBefore',
  'breakInside',
  'captionSide',
  'caret',
  'caretColor',
  'caretShape',
  'clear',
  'clip',
  'clipPath',
  'color',
  'printColorAdjust',
  'colorScheme',
  'columnCount',
  'columnFill',
  'columnGap',
  'columnRule',
  'columnRuleColor',
  'columnRuleStyle',
  'columnRuleWidth',
  'columnSpan',
  'columnWidth',
  'columns',
  'contain',
  'containIntrinsicSize',
  'containIntrinsicBlockSize',
  'containIntrinsicHeight',
  'containIntrinsicInlineSize',
  'containIntrinsicWidth',
  'content',
  'contentVisibility',
  'counterIncrement',
  'counterReset',
  'counterSet',
  'cursor',
  'direction',
  'display',
  'emptyCells',
  'filter',
  'flex',
  'flexBasis',
  'flexDirection',
  'flexFlow',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'float',
  'font',
  'fontFamily',
  'fontFeatureSettings',
  'fontKerning',
  'fontLanguageOverride',
  'fontOpticalSizing',
  'fontVariationSettings',
  'fontSize',
  'fontSizeAdjust',
  'fontSmooth',
  'fontStretch',
  'fontStyle',
  'fontSynthesis',
  'fontVariant',
  'fontVariantAlternates',
  'fontVariantCaps',
  'fontVariantEastAsian',
  'fontVariantLigatures',
  'fontVariantNumeric',
  'fontVariantPosition',
  'fontWeight',
  'forcedColorAdjust',
  'gap',
  'grid',
  'gridArea',
  'gridAutoColumns',
  'gridAutoFlow',
  'gridAutoRows',
  'gridColumn',
  'gridColumnEnd',
  'gridColumnGap',
  'gridColumnStart',
  'gridGap',
  'gridRow',
  'gridRowEnd',
  'gridRowGap',
  'gridRowStart',
  'gridTemplate',
  'gridTemplateAreas',
  'gridTemplateColumns',
  'gridTemplateRows',
  'hangingPunctuation',
  'height',
  'hyphenateCharacter',
  'hyphens',
  'imageOrientation',
  'imageRendering',
  'imageResolution',
  'imeMode',
  'initialLetter',
  'initialLetterAlign',
  'inlineSize',
  'inputSecurity',
  'inset',
  'insetBlock',
  'insetBlockEnd',
  'insetBlockStart',
  'insetInline',
  'insetInlineEnd',
  'insetInlineStart',
  'isolation',
  'justifyContent',
  'justifyItems',
  'justifySelf',
  'justifyTracks',
  'left',
  'letterSpacing',
  'lineBreak',
  'lineClamp',
  'lineHeight',
  'lineHeightStep',
  'listStyle',
  'listStyleImage',
  'listStylePosition',
  'listStyleType',
  'margin',
  'marginBlock',
  'marginBlockEnd',
  'marginBlockStart',
  'marginBottom',
  'marginInline',
  'marginInlineEnd',
  'marginInlineStart',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginTrim',
  'mask',
  'maskBorder',
  'maskBorderMode',
  'maskBorderOutset',
  'maskBorderRepeat',
  'maskBorderSlice',
  'maskBorderSource',
  'maskBorderWidth',
  'maskClip',
  'maskComposite',
  'maskImage',
  'maskMode',
  'maskOrigin',
  'maskPosition',
  'maskRepeat',
  'maskSize',
  'maskType',
  'masonryAutoFlow',
  'mathDepth',
  'mathShift',
  'mathStyle',
  'maxBlockSize',
  'maxHeight',
  'maxInlineSize',
  'maxLines',
  'maxWidth',
  'minBlockSize',
  'minHeight',
  'minInlineSize',
  'minWidth',
  'mixBlendMode',
  'objectFit',
  'objectPosition',
  'offset',
  'offsetAnchor',
  'offsetDistance',
  'offsetPath',
  'offsetPosition',
  'offsetRotate',
  'opacity',
  'order',
  'orphans',
  'outline',
  'outlineColor',
  'outlineOffset',
  'outlineStyle',
  'outlineWidth',
  'overflow',
  'overflowAnchor',
  'overflowBlock',
  'overflowClipBox',
  'overflowClipMargin',
  'overflowInline',
  'overflowWrap',
  'overflowX',
  'overflowY',
  'overscrollBehavior',
  'overscrollBehaviorBlock',
  'overscrollBehaviorInline',
  'overscrollBehaviorX',
  'overscrollBehaviorY',
  'padding',
  'paddingBlock',
  'paddingBlockEnd',
  'paddingBlockStart',
  'paddingBottom',
  'paddingInline',
  'paddingInlineEnd',
  'paddingInlineStart',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'pageBreakAfter',
  'pageBreakBefore',
  'pageBreakInside',
  'paintOrder',
  'perspective',
  'perspectiveOrigin',
  'placeContent',
  'placeItems',
  'placeSelf',
  'pointerEvents',
  'position',
  'quotes',
  'resize',
  'right',
  'rotate',
  'rowGap',
  'rubyAlign',
  'rubyMerge',
  'rubyPosition',
  'scale',
  'scrollbarColor',
  'scrollbarGutter',
  'scrollbarWidth',
  'scrollBehavior',
  'scrollMargin',
  'scrollMarginBlock',
  'scrollMarginBlockStart',
  'scrollMarginBlockEnd',
  'scrollMarginBottom',
  'scrollMarginInline',
  'scrollMarginInlineStart',
  'scrollMarginInlineEnd',
  'scrollMarginLeft',
  'scrollMarginRight',
  'scrollMarginTop',
  'scrollPadding',
  'scrollPaddingBlock',
  'scrollPaddingBlockStart',
  'scrollPaddingBlockEnd',
  'scrollPaddingBottom',
  'scrollPaddingInline',
  'scrollPaddingInlineStart',
  'scrollPaddingInlineEnd',
  'scrollPaddingLeft',
  'scrollPaddingRight',
  'scrollPaddingTop',
  'scrollSnapAlign',
  'scrollSnapCoordinate',
  'scrollSnapDestination',
  'scrollSnapPointsX',
  'scrollSnapPointsY',
  'scrollSnapStop',
  'scrollSnapType',
  'scrollSnapTypeX',
  'scrollSnapTypeY',
  'scrollTimeline',
  'scrollTimelineAxis',
  'scrollTimelineName',
  'shapeImageThreshold',
  'shapeMargin',
  'shapeOutside',
  'tabSize',
  'tableLayout',
  'textAlign',
  'textAlignLast',
  'textCombineUpright',
  'textDecoration',
  'textDecorationColor',
  'textDecorationLine',
  'textDecorationSkip',
  'textDecorationSkipInk',
  'textDecorationStyle',
  'textDecorationThickness',
  'textEmphasis',
  'textEmphasisColor',
  'textEmphasisPosition',
  'textEmphasisStyle',
  'textIndent',
  'textJustify',
  'textOrientation',
  'textOverflow',
  'textRendering',
  'textShadow',
  'textSizeAdjust',
  'textTransform',
  'textUnderlineOffset',
  'textUnderlinePosition',
  'top',
  'touchAction',
  'transform',
  'transformBox',
  'transformOrigin',
  'transformStyle',
  'transition',
  'transitionDelay',
  'transitionDuration',
  'transitionProperty',
  'transitionTimingFunction',
  'translate',
  'unicodeBidi',
  'userSelect',
  'verticalAlign',
  'visibility',
  'whiteSpace',
  'widows',
  'width',
  'willChange',
  'wordBreak',
  'wordSpacing',
  'wordWrap',
  'writingMode',
  'zIndex',
  'zoom',
  ...userGenerated,
])

const regex = new RegExp('^(?:' + Array.from(allCssProperties).join('|') + ')$')

function memo<T>(fn: (value: string) => T): (value: string) => T {
  const cache = Object.create(null)
  return (arg: string) => {
    if (cache[arg] === undefined) cache[arg] = fn(arg)
    return cache[arg]
  }
}

const isCssProperty = memo((prop: string) => {
  return regex.test(prop) || prop.startsWith('--')
})

export { isCssProperty, allCssProperties }
