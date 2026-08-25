import type { FeedGroup } from '../app/types/feed'
// 友链检测 CLI 需要使用显式导入和相对路径
import { myFeed } from '../blog.config'
// eslint-disable-next-line unused-imports/no-unused-imports
import { getFavicon, getGithubAvatar, getGithubIcon, getOciqGroupAvatar, getOicqAvatar, OicqAvatarSize } from './utils/img'

export default [

	// #region XUPTers
	{
		name: 'HEUers',
		desc: '哈尔滨工程大学的校友们。',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: '半岛的孤城',
				sitenick: '小屋',
				title: '半岛的小屋',
				desc: '不知道写啥，那就不写了。哎嘿',
				link: 'https://www.bandao.ltd/',
				feed: 'https://www.bandao.ltd/atom.xml',
				icon: getGithubIcon('bandaoworld'),
				avatar: getGithubAvatar('bandaoworld'),
				archs: ['Hexo', '服务器'],
				date: '2024-02-02',
				comment: '大学学长，爱好摄影/听歌，会一些Vue。',
			},
		],
	},
	// #endregion
	// #region GDOUers
	{
		name: 'GDOUers',
		desc: '广东海洋大学的校友们。',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: '半岛的孤城',
				sitenick: '小屋',
				title: '半岛的小屋',
				desc: '不知道写啥，那就不写了。哎嘿',
				link: 'https://www.bandao.ltd/',
				feed: 'https://www.bandao.ltd/atom.xml',
				icon: getGithubIcon('bandaoworld'),
				avatar: getGithubAvatar('bandaoworld'),
				archs: ['Hexo', '服务器'],
				date: '2024-02-02',
				comment: '大学学长，爱好摄影/听歌，会一些Vue。',
			},

		],
	},
	// #endregion

] satisfies FeedGroup[]
