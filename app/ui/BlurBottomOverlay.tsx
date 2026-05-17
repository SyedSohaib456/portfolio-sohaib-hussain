interface BottomBlurOverlayProps {
  layers?: number // How many blur layers (default 12 for smoother transition)
  height?: string // Height of the blur area (default "180px")
  strength?: 1 | 2 | 3 | 4 | 5
  className?: string // Extra classes for the wrapper div
}

export const BottomBlurOverlay: React.FC<BottomBlurOverlayProps> = ({
  layers = 12,
  height = "60px",
  strength = 3,
  className = ""
}) => {
  const blursStrengths = [
    [0.01, 0.02, 0.04, 0.08, 0.16, 0.32, 0.63, 1.25, 2.5, 4, 6, 8],
    [0.02, 0.04, 0.08, 0.16, 0.32, 0.63, 1.25, 2.5, 4, 6, 8, 10],
    [0.04, 0.08, 0.16, 0.32, 0.63, 1.25, 2.5, 4, 6, 8, 10, 12],
    [0.08, 0.16, 0.32, 0.63, 1.25, 2.5, 4, 6, 8, 10, 12, 14],
    [0.16, 0.32, 0.63, 1.25, 2.5, 4, 6, 8, 10, 12, 14, 16],
  ];

  const blurs = blursStrengths[strength - 1]

  return (
    <div
      className={`blur-overlay pointer-events-none fixed inset-x-0 bottom-0 z-[100] ${className}`}
      style={{
        height: height,
        overflow: "hidden",
      }}
    >
      {Array.from({ length: layers }).map((_, i) => {
        const blur = blurs[i] || blurs[blurs.length - 1]

        const progress = i / (layers - 1)
        const density = Math.pow(progress, 2)

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: i + 1,
              backdropFilter: `blur(${blur}px) saturate(140%)`,
              WebkitBackdropFilter: `blur(${blur}px) saturate(140%)`,
              backgroundColor: `rgba(255, 255, 255, ${0.005 * (i + 1)})`,
              maskImage: `linear-gradient(to top, rgba(0,0,0,${density}) 0%, rgba(0,0,0,0) 100%)`,
              WebkitMaskImage: `linear-gradient(to top, rgba(0,0,0,${density}) 0%, rgba(0,0,0,0) 100%)`,
            }}
          />
        )
      })}
      {/* Liquid surface highlight */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white/10 z-[200]"
        style={{ boxShadow: '0 -1px 10px rgba(255,255,255,0.2)' }}
      />
    </div>
  )
}
