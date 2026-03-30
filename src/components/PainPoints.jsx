import React, { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const painPoints = [
  {
    id: 'calls',
    metric: '78%',
    title: 'of leads buy from the business that responds first',
    detail: '',
    source: 'Lead Connect',
    sceneTitle: 'Missed calls move fast',
    sceneDescription: 'The window between an incoming call and a lost lead is usually measured in moments, not days.'
  },
  {
    id: 'follow-up',
    metric: '21x',
    title: 'more likely to convert leads with a response in < 5min',
    detail: '',
    source: 'Harvard Business Review',
    sceneTitle: 'Delay drains intent',
    sceneDescription: 'A fast response protects momentum. A slow one gives the buyer time to move on.'
  },
  {
    id: 'content',
    metric: '8x - 11x',
    title: 'number of touch points required to convert leads',
    detail: '',
    source: 'Google',
    sceneTitle: 'Consistency keeps you visible',
    sceneDescription: 'Brands that stay visible stay more likely to be considered when the buying moment arrives.'
  },
  {
    id: 'reviews',
    metric: '270%',
    title: 'increase in revenue for businesses with 40+ Google reviews',
    detail: '',
    source: 'BrightLocal',
    sceneTitle: 'Trust gets compared instantly',
    sceneDescription: 'Review volume changes how credible you look before the first conversation even starts.'
  }
]

const SceneFrame = ({ children }) => (
  <div className="relative min-h-[280px] overflow-hidden rounded-[28px] border border-white/8 bg-black/30 p-5 sm:min-h-[320px] sm:p-6">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(142,45,226,0.16),_transparent_42%),linear-gradient(to_bottom,_rgba(255,255,255,0.05),_transparent_45%)]" />
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.06)_50%,transparent_100%),linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] opacity-20" />
    {children}
  </div>
)

const PhoneGlyph = ({ x, y, fill = 'rgba(255,255,255,0.74)' }) => (
  <path
    d="M6.6 2.9c.5-.3 1.1-.1 1.4.4l1.2 2.1c.2.4.2.9-.1 1.3l-.8.9a11 11 0 0 0 4.8 4.8l.9-.8c.3-.3.9-.4 1.3-.1l2.1 1.2c.5.3.6.9.4 1.4l-.7 1.5c-.3.6-1 .9-1.7.8A14.8 14.8 0 0 1 3.4 4.6c-.1-.7.2-1.4.8-1.7l1.5-.7Z"
    transform={`translate(${x} ${y}) scale(0.72)`}
    fill={fill}
  />
)

const pointStyle = (x, y, transform = 'translate(-50%, -50%)') => ({
  left: `${x}%`,
  top: `${y}%`,
  transform
})

const PhoneIcon = ({ fill = 'rgba(255,255,255,0.82)', className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 20 20" className={className} fill="none" aria-hidden="true">
    <PhoneGlyph x="2.4" y="2.1" fill={fill} />
  </svg>
)

const StatusChip = ({ x, y, label, animate, transition, className = '' }) => (
  <div className="absolute z-20" style={pointStyle(x, y)}>
    <motion.div
      animate={animate}
      transition={transition}
      className={`flex min-w-[102px] items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white/76 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ${className}`}
    >
      {label}
    </motion.div>
  </div>
)

const RevenueChip = ({ x, y, animate, transition }) => (
  <div className="absolute z-20" style={pointStyle(x, y)}>
    <motion.div
      animate={animate}
      transition={transition}
      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-white/84 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
    >
      +$
    </motion.div>
  </div>
)

const CallsScene = ({ isPlaying = false }) => {
  const shouldReduceMotion = useReducedMotion()
  const loopDuration = 12
  const loopEase = [0.32, 0.72, 0, 1]
  const pulseEase = [0.16, 1, 0.3, 1]
  const fadeWindow = 0.3
  const epsilon = 0.02
  const firstRingingStart = 2
  const firstRingingEnd = 4
  const firstMissedEnd = 6
  const secondPillsStart = 6
  const secondPillsFadeEnd = 6.3
  const secondRingingStart = 8
  const secondRingingEnd = 10
  const secondAnsweredStart = 10
  const revenueStagger = 0.12
  const revenueHoldDuration = 1.5
  const secondRevenueEnd = secondAnsweredStart + revenueStagger * 2 + epsilon
  const finaleStart = secondRevenueEnd + revenueHoldDuration
  const loopEnd = loopDuration
  const toLoopTime = (seconds) => seconds / loopDuration
  const timed = (times) => ({
    duration: loopDuration,
    repeat: Infinity,
    ease: loopEase,
    times: times.map(toLoopTime)
  })
  const firstBusinessShakeStart = firstRingingStart + 0.4
  const firstBusinessShakePeak = firstRingingStart + 1
  const firstBusinessShakeEnd = firstRingingEnd - 0.3

  if (!isPlaying) {
    return (
      <SceneFrame>
        <div className="relative h-[220px] sm:h-[240px]" />
      </SceneFrame>
    )
  }

  if (shouldReduceMotion) {
    return (
      <SceneFrame>
        <div className="relative h-[220px] sm:h-[240px]">
          <div className="absolute inset-4 sm:inset-6">
            <div className="absolute z-10" style={pointStyle(34, 64)}>
              <div className="relative isolate flex w-36 items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:w-44">
                <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-primary/[0.06] blur-2xl" />
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                  <PhoneIcon fill="rgba(255,255,255,0.56)" />
                </div>
                <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.18em] text-white/54">
                  Your business
                </span>
              </div>
            </div>

            <div className="absolute z-10" style={pointStyle(74, 58)}>
              <div className="relative isolate flex w-32 items-center gap-3 rounded-full border border-white/14 bg-white/[0.05] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:w-40">
                <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-primary/[0.18] blur-2xl" />
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/12 bg-primary/18">
                  <PhoneIcon />
                </div>
                <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.18em] text-white/82">
                  Competitor
                </span>
              </div>
            </div>

            <StatusChip x={34} y={48} label="Missed" />
            <StatusChip x={74} y={42} label="Answered" className="text-white/82" />
            <RevenueChip x={79} y={32} />
          </div>
        </div>
      </SceneFrame>
    )
  }

  return (
    <SceneFrame>
      <div className="relative h-[220px] sm:h-[240px]">
        <div className="absolute inset-4 sm:inset-6">
          <div className="absolute z-10" style={pointStyle(18, 30, 'translate(-18%, -118%)')}>
            <motion.div
              animate={{
                opacity: [0, 1, 1, 1, 0, 0],
                y: [8, 0, 0, 0, -6, -6],
                scale: [0.96, 1, 1.02, 1.02, 0.96, 0.96]
              }}
              transition={timed([0, fadeWindow, firstRingingStart, firstRingingEnd, firstRingingEnd + fadeWindow, loopEnd])}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              <div className="relative flex size-8 items-center justify-center rounded-full border border-white/10 bg-primary/20">
                {[0, 0.22].map((delay, index) => (
                  <motion.span
                    key={index}
                    className="absolute inset-0 rounded-full border border-primary/35"
                    animate={{ scale: [0.72, 1.6, 1.85, 1.85], opacity: [0, 0.55, 0, 0] }}
                    transition={{ duration: 1.15, repeat: Infinity, ease: pulseEase, delay }}
                  />
                ))}
                <PhoneIcon />
              </div>
              <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.22em] text-white/76">
                Incoming call
              </span>
            </motion.div>
          </div>

          <div className="absolute z-10" style={pointStyle(34, 64)}>
            <motion.div
              animate={{
                opacity: [0, 1, 1, 1, 1, 1, 0, 0],
                x: [0, 0, -1.4, 1.5, 0, 0, 0, 0],
                rotate: [0, 0, -0.4, 0.35, 0, 0, 0, 0]
              }}
              transition={{
                duration: loopDuration,
                repeat: Infinity,
                ease: loopEase,
                times: [
                  0,
                  toLoopTime(fadeWindow),
                  toLoopTime(firstBusinessShakeStart),
                  toLoopTime(firstBusinessShakePeak),
                  toLoopTime(firstBusinessShakeEnd),
                  toLoopTime(firstMissedEnd),
                  toLoopTime(firstMissedEnd + fadeWindow),
                  toLoopTime(loopEnd)
                ]
              }}
              className="relative isolate flex w-36 items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:w-44"
            >
              <motion.span
                className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-primary/[0.12] blur-2xl"
                animate={{ opacity: [0.04, 0.04, 0.18, 0.2, 0.06, 0.04], scale: [0.92, 0.92, 1.03, 1.05, 0.96, 0.92] }}
                transition={timed([0, firstRingingStart, firstRingingStart + epsilon, firstRingingEnd, firstMissedEnd, loopEnd])}
              />
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                <PhoneIcon fill="rgba(255,255,255,0.58)" />
              </div>
              <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.18em] text-white/54">
                Your business
              </span>
            </motion.div>
          </div>

          <StatusChip
            x={34}
            y={48}
            label="Ringing"
            animate={{ opacity: [0, 0, 1, 1, 0, 0], y: [0, 0, 0, 0, 0, 0] }}
            transition={timed([0, firstRingingStart, firstRingingStart + epsilon, firstRingingEnd, firstRingingEnd + epsilon, loopEnd])}
          />
          <StatusChip
            x={34}
            y={48}
            label="Missed"
            animate={{ opacity: [0, 0, 1, 1, 0, 0], y: [0, 0, 0, 0, 0, 0] }}
            transition={timed([0, firstRingingEnd, firstRingingEnd + epsilon, firstMissedEnd, firstMissedEnd + epsilon, loopEnd])}
          />

          <motion.div
            className="absolute inset-0"
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={timed([0, secondPillsStart, secondPillsFadeEnd, finaleStart, loopEnd])}
          >
            <div className="absolute z-10" style={pointStyle(74, 58)}>
              <div className="relative isolate flex w-32 items-center gap-3 rounded-full border border-white/14 bg-white/[0.05] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:w-40">
                <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-primary/[0.18] blur-2xl" />
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/12 bg-primary/18">
                  <PhoneIcon />
                </div>
                <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.18em] text-white/82">
                  Competitor
                </span>
              </div>
            </div>

            <div className="absolute z-10" style={pointStyle(58, 24, 'translate(-18%, -118%)')}>
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="relative flex size-8 items-center justify-center rounded-full border border-white/10 bg-primary/20">
                  <PhoneIcon />
                </div>
                <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.22em] text-white/76">
                  Incoming call
                </span>
              </div>
            </div>

            <StatusChip
              x={74}
              y={42}
              label="Ringing"
              animate={{ opacity: [0, 0, 1, 1, 0, 0], y: [0, 0, 0, 0, 0, 0] }}
              transition={timed([0, secondRingingStart, secondRingingStart + epsilon, secondRingingEnd, secondRingingEnd + epsilon, loopEnd])}
              className="text-white/82"
            />

            <StatusChip
              x={74}
              y={42}
              label="Answered"
              animate={{ opacity: [0, 0, 1, 1], y: [0, 0, 0, 0] }}
              transition={timed([0, secondAnsweredStart, secondAnsweredStart + epsilon, loopEnd])}
              className="text-white/82"
            />

            {[0, revenueStagger, revenueStagger * 2].map((delay, index) => (
              <RevenueChip
                key={index}
                x={76 + index * 3}
                y={32 + (index % 2 === 0 ? 0 : -2)}
                animate={{
                  opacity: [0, 0, 1, 1],
                  y: [8 + index * 2, 8 + index * 2, 0, 0],
                  scale: [0.86, 0.86, 1, 1]
                }}
                transition={timed([0, secondAnsweredStart + delay, secondAnsweredStart + delay + epsilon, loopEnd])}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </SceneFrame>
  )
}

const FollowUpScene = ({ isPlaying = false }) => (
  <SceneFrame>
    <div className="grid h-full items-center gap-8 lg:grid-cols-[180px_minmax(0,1fr)]">
      <div className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
        {isPlaying ? (
          <motion.div
            className="absolute inset-3 rounded-full border border-primary/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
          />
        ) : (
          <div className="absolute inset-3 rounded-full border border-primary/30" />
        )}
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">Response</p>
          <p className="mt-2 text-4xl font-medium tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            5m
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/40">Lead warmth</p>
          <div className="mt-3 space-y-3">
            <div className="h-2 rounded-full bg-white/10">
              {isPlaying ? (
                <motion.div
                  className="h-2 rounded-full bg-primary"
                  animate={{ width: ['92%', '28%', '92%'] }}
                  transition={{ duration: 4.3, repeat: Infinity, ease: 'easeInOut' }}
                />
              ) : (
                <div className="h-2 rounded-full bg-primary" style={{ width: '92%' }} />
              )}
            </div>
            <div className="h-2 rounded-full bg-white/10">
              {isPlaying ? (
                <motion.div
                  className="h-2 rounded-full bg-white/60"
                  animate={{ width: ['70%', '16%', '70%'] }}
                  transition={{ duration: 4.3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                />
              ) : (
                <div className="h-2 rounded-full bg-white/60" style={{ width: '70%' }} />
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {['Quote sent', 'No reply', 'Deal lost'].map((step, index) => (
            isPlaying ? (
              <motion.div
                key={step}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-4 text-center text-xs uppercase tracking-[0.16em] text-white/52"
                animate={{ opacity: index === 0 ? [1, 0.45, 1] : [0.45, 1, 0.45], y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.25 }}
              >
                {step}
              </motion.div>
            ) : (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-4 text-center text-xs uppercase tracking-[0.16em] text-white/52"
                style={{ opacity: index === 0 ? 1 : 0.45 }}
              >
                {step}
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  </SceneFrame>
)

const ContentScene = ({ isPlaying = false }) => (
  <SceneFrame>
    <div className="grid h-full gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
      <div className="flex flex-col justify-center gap-3">
        {[0, 1, 2].map((index) => (
          isPlaying ? (
            <motion.div
              key={index}
              className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4"
              animate={{ opacity: [1, 0.28, 1], y: [0, -7, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: index * 0.22 }}
            >
              <div className="h-2 w-16 rounded-full bg-white/20" />
              <div className="mt-4 h-2 w-full rounded-full bg-white/10" />
              <div className="mt-2 h-2 w-4/5 rounded-full bg-white/10" />
              <div className="mt-2 h-2 w-3/5 rounded-full bg-white/10" />
            </motion.div>
          ) : (
            <div
              key={index}
              className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="h-2 w-16 rounded-full bg-white/20" />
              <div className="mt-4 h-2 w-full rounded-full bg-white/10" />
              <div className="mt-2 h-2 w-4/5 rounded-full bg-white/10" />
              <div className="mt-2 h-2 w-3/5 rounded-full bg-white/10" />
            </div>
          )
        ))}
      </div>

      <div className="flex flex-col justify-center gap-4">
        {isPlaying ? (
          <motion.div
            className="rounded-[24px] border border-primary/30 bg-primary/[0.08] p-5"
            animate={{ boxShadow: ['0 0 0 rgba(142,45,226,0)', '0 0 34px rgba(142,45,226,0.22)', '0 0 0 rgba(142,45,226,0)'] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary/80">Competitor feed</p>
            <p className="mt-3 text-2xl font-medium text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Always visible
            </p>
          </motion.div>
        ) : (
          <div className="rounded-[24px] border border-primary/30 bg-primary/[0.08] p-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary/80">Competitor feed</p>
            <p className="mt-3 text-2xl font-medium text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Always visible
            </p>
          </div>
        )}

        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 text-sm leading-6 text-white/65">
          Buyers remember the brands they keep seeing.
        </div>
      </div>
    </div>
  </SceneFrame>
)

const ReviewsScene = ({ isPlaying = false }) => (
  <SceneFrame>
    <div className="grid h-full items-center gap-4 sm:grid-cols-2">
      <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
        <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">You</p>
        <p className="mt-4 text-5xl font-medium tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          8
        </p>
        <div className="mt-5 h-2 rounded-full bg-white/10">
          {isPlaying ? (
            <motion.div
              className="h-2 rounded-full bg-white/45"
              animate={{ width: ['18%', '26%', '18%'] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          ) : (
            <div className="h-2 rounded-full bg-white/45" style={{ width: '18%' }} />
          )}
        </div>
      </div>

      <div className="rounded-[24px] border border-primary/25 bg-primary/[0.08] p-5">
        <p className="text-[11px] uppercase tracking-[0.22em] text-primary/80">Competitor</p>
        <p className="mt-4 text-5xl font-medium tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          85
        </p>
        <div className="mt-5 h-2 rounded-full bg-white/10">
          {isPlaying ? (
            <motion.div
              className="h-2 rounded-full bg-primary"
              animate={{ width: ['72%', '88%', '72%'] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            />
          ) : (
            <div className="h-2 rounded-full bg-primary" style={{ width: '72%' }} />
          )}
        </div>
      </div>
    </div>
  </SceneFrame>
)

const PainPointVisual = ({ point, isPlaying }) => {
  if (point.id === 'calls') return <CallsScene isPlaying={isPlaying} />
  if (point.id === 'follow-up') return <FollowUpScene isPlaying={isPlaying} />
  if (point.id === 'content') return <ContentScene isPlaying={isPlaying} />
  return <ReviewsScene isPlaying={isPlaying} />
}

const PainPoints = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [isScenePlaying, setIsScenePlaying] = useState(false)
  const [sceneRunId, setSceneRunId] = useState(0)
  const activePoint = activeIndex === null ? null : painPoints[activeIndex]

  const startScenePreview = (index) => {
    const shouldRestart = !isScenePlaying || activeIndex !== index
    setActiveIndex(index)
    setIsScenePlaying(true)
    if (shouldRestart) {
      setSceneRunId((current) => current + 1)
    }
  }

  const stopScenePreview = () => {
    setIsScenePlaying(false)
    setActiveIndex(null)
  }

  return (
    <section
      id='pain-points'
      className='relative px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.85fr)] lg:items-start">
        <div className="flex flex-col gap-8 lg:pr-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h2
              className='text-3xl font-medium tracking-tight text-white sm:text-5xl'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              You're probably losing more business than you realise.
            </h2>
            <p className='max-w-lg text-base leading-relaxed text-gray-500 dark:text-white/75'>
              Most small businesses do not have a fulfillment problem. They have a visibility and follow-up problem.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {painPoints.map((point, index) => {
              const isActive = index === activeIndex

              return (
                <motion.button
                  key={point.id}
                  type="button"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => startScenePreview(index)}
                  onMouseLeave={stopScenePreview}
                  onFocus={() => startScenePreview(index)}
                  onBlur={stopScenePreview}
                  onClick={() => startScenePreview(index)}
                  className={`group min-h-[228px] rounded-[28px] border p-6 text-left transition-all duration-500 sm:min-h-[242px] ${
                    isActive
                      ? 'border-primary/35 bg-primary/[0.08] shadow-[0_0_36px_rgba(142,45,226,0.14)]'
                      : 'border-white/10 bg-white/[0.03] hover:border-white/18'
                  }`}
                >
                  <div className="flex h-full flex-col">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/38">
                      {point.source}
                    </span>
                    <p
                      className="mt-5 text-[2.5rem] font-medium tracking-tight text-primary sm:text-[3rem]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {point.metric}
                    </p>
                    <h3
                      className="mt-4 max-w-[16ch] text-xl font-medium tracking-tight text-white sm:text-2xl"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {point.title}
                    </h3>
                    <p className="mt-3 max-w-[28ch] text-sm leading-6 text-white/68">
                      {point.detail}
                    </p>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>

        <div className="order-last hidden lg:block lg:sticky lg:top-24">
          <AnimatePresence mode="wait" initial={false}>
            {activePoint ? (
              <motion.aside
                key={activePoint.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 24 }}
                transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              >
                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-[1px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(142,45,226,0.14),_transparent_42%)]" />
                  <div className="relative rounded-[31px] bg-[#060606] p-5 sm:p-6">
                    <h3
                      className="text-2xl font-medium tracking-tight text-white sm:text-[2rem]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {activePoint.sceneTitle}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-white/62">
                      {activePoint.sceneDescription}
                    </p>

                    <div className="mt-5">
                      <motion.div
                        key={activePoint.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                      >
                        <PainPointVisual
                          key={`${activePoint.id}-${isScenePlaying ? sceneRunId : 'idle'}`}
                          point={activePoint}
                          isPlaying={isScenePlaying}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.aside>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default PainPoints
