
type HtmlTagNames = keyof JSX.IntrinsicElements;

type AnyHtmlProps = React.AllHTMLAttributes<HTMLElement> & React.DOMAttributes<HTMLElement>;

type NonFunctionHtmlProps = Omit<AnyHtmlProps,
	| 'onCopy' | 'onCut' | 'onPaste'
	| 'onCompositionEnd' | 'onCompositionStart' | 'onCompositionUpdate'
	| 'onFocus' | 'onBlur'
	| 'onChange' | 'onInput' | 'onReset' | 'onSubmit' | 'onInvalid'
	| 'onLoad' | 'onError'
	| 'onKeyDown' | 'onKeyPress' | 'onKeyUp'
	| 'onAbort' | 'onCanPlay' | 'onCanPlayThrough' | 'onDurationChange' | 'onEmptied'
	| 'onEncrypted' | 'onEnded' | 'onLoadedData' | 'onLoadedMetadata' | 'onLoadStart'
	| 'onPause' | 'onPlay' | 'onPlaying' | 'onProgress' | 'onRateChange'
	| 'onSeeked' | 'onSeeking' | 'onStalled' | 'onSuspend' | 'onTimeUpdate'
	| 'onVolumeChange' | 'onWaiting'
	| 'onClick' | 'onContextMenu' | 'onDoubleClick' | 'onDrag' | 'onDragEnd'
	| 'onDragEnter' | 'onDragExit' | 'onDragLeave' | 'onDragOver' | 'onDragStart'
	| 'onDrop' | 'onMouseDown' | 'onMouseEnter' | 'onMouseLeave' | 'onMouseMove'
	| 'onMouseOut' | 'onMouseOver' | 'onMouseUp'
	| 'onSelect'
	| 'onTouchCancel' | 'onTouchEnd' | 'onTouchMove' | 'onTouchStart'
	| 'onPointerDown' | 'onPointerMove' | 'onPointerUp' | 'onPointerCancel'
	| 'onPointerEnter' | 'onPointerLeave' | 'onPointerOver' | 'onPointerOut'
	| 'onGotPointerCapture' | 'onLostPointerCapture'
	| 'onScroll'
	| 'onWheel'
	| 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
	| 'onTransitionEnd'
>;

// Явно додаємо всі функціональні пропси із заміною типу на string
type StringifiedFunctionProps = {
	onCopy?: string;
	onCut?: string;
	onPaste?: string;

	onCompositionEnd?: string;
	onCompositionStart?: string;
	onCompositionUpdate?: string;

	onFocus?: string;
	onBlur?: string;

	onChange?: string;
	onInput?: string;
	onReset?: string;
	onSubmit?: string;
	onInvalid?: string;

	onLoad?: string;
	onError?: string;

	onKeyDown?: string;
	onKeyPress?: string;
	onKeyUp?: string;

	onAbort?: string;
	onCanPlay?: string;
	onCanPlayThrough?: string;
	onDurationChange?: string;
	onEmptied?: string;
	onEncrypted?: string;
	onEnded?: string;
	onLoadedData?: string;
	onLoadedMetadata?: string;
	onLoadStart?: string;
	onPause?: string;
	onPlay?: string;
	onPlaying?: string;
	onProgress?: string;
	onRateChange?: string;
	onSeeked?: string;
	onSeeking?: string;
	onStalled?: string;
	onSuspend?: string;
	onTimeUpdate?: string;
	onVolumeChange?: string;
	onWaiting?: string;

	onClick?: string;
	onContextMenu?: string;
	onDoubleClick?: string;
	onDrag?: string;
	onDragEnd?: string;
	onDragEnter?: string;
	onDragExit?: string;
	onDragLeave?: string;
	onDragOver?: string;
	onDragStart?: string;
	onDrop?: string;
	onMouseDown?: string;
	onMouseEnter?: string;
	onMouseLeave?: string;
	onMouseMove?: string;
	onMouseOut?: string;
	onMouseOver?: string;
	onMouseUp?: string;

	onSelect?: string;

	onTouchCancel?: string;
	onTouchEnd?: string;
	onTouchMove?: string;
	onTouchStart?: string;

	onPointerDown?: string;
	onPointerMove?: string;
	onPointerUp?: string;
	onPointerCancel?: string;
	onPointerEnter?: string;
	onPointerLeave?: string;
	onPointerOver?: string;
	onPointerOut?: string;
	onGotPointerCapture?: string;
	onLostPointerCapture?: string;

	onScroll?: string;

	onWheel?: string;

	onAnimationStart?: string;
	onAnimationEnd?: string;
	onAnimationIteration?: string;

	onTransitionEnd?: string;
};

type StringifiedHtmlProps = NonFunctionHtmlProps & StringifiedFunctionProps;

interface IElementEntity {
	type: HtmlTagNames | string;
	props?: StringifiedHtmlProps;
	children: Array<string | IElementEntity>;
}