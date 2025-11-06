import type { FC } from 'react';

type Step = {
	title: string;
	summary: string;
	details: string[];
	icon: string;
};

const steps: Step[] = [
	{
		title: 'Capture in Notion',
		summary: 'Draft content inside the Notion “Blog Pipeline” database.',
		details: [
			'Each entry has required metadata: title, preview text, publish date, tags, and status.',
			'Images and long-form content live directly inside the Notion page, so writing happens in one place.',
		],
		icon: '📝',
	},
	{
		title: 'Mark “Ready to Publish”',
		summary: 'Move the status column to “Ready to Publish” when the post is final.',
		details: [
			'A scheduled GitHub Action checks the database every 5 minutes.',
			'Only posts in the “Ready to Publish” state are converted to Markdown.',
		],
		icon: '✅',
	},
	{
		title: 'GitHub Action pulls content',
		summary: 'The workflow fetches the page, converts it to Markdown, and commits it.',
		details: [
			'`scripts/publish.js` turns Notion blocks into Markdown + frontmatter for Astro.',
			'The action commits the generated file to `src/content/blog/` with a slug derived from the title.',
		],
		icon: '🤖',
	},
	{
		title: 'Status synced back to Notion',
		summary: 'After a successful commit the Notion status flips to “Published”.',
		details: [
			'Prevents duplicate publishes—only unpublished posts remain in the queue.',
			'The database history shows when each article left the pipeline.',
		],
		icon: '🔁',
	},
	{
		title: 'Deploy to GitHub Pages',
		summary: 'A second workflow builds the Astro site and deploys it to Pages.',
		details: [
			'The Pages artifact is generated from `npm run build` and pushed with `actions/deploy-pages`.',
			'The live site automatically receives the new article—no manual deploy step needed.',
		],
		icon: '🚀',
	},
];

const WorkflowTimeline: FC = () => {
	return (
		<div className="timeline" aria-label="Automated blog workflow">
			{steps.map((step, idx) => (
				<div className="timeline-step" key={step.title}>
					<div className="timeline-marker" aria-hidden="true">
						<span>{step.icon}</span>
						<div className="timeline-line" data-last={idx === steps.length - 1} />
					</div>
					<div className="timeline-card">
						<p className="step-badge">Step {idx + 1}</p>
						<h3>{step.title}</h3>
						<p className="summary">{step.summary}</p>
						<ul>
							{step.details.map((detail) => (
								<li key={detail}>{detail}</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</div>
	);
};

export default WorkflowTimeline;
