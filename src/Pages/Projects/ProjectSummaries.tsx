//by making this a compiled ts file, we guarantee all pieces of content are present

//TODO->articles might want to be their own page
//TODO->summary might want to be a JSX.Element rather than a string... can wrap in <></> for just string

//imports for images used in the projects
import logo from '../../images/logo.png'
import logo_slim from '../../images/logo_slim.png'
import escort_mission from '../../images/escort_mission_lamb.png'
import dewy_dandelion from '../../images/dewy_dandelion.jpg'

export interface ProjectContent {
    title: string
    github?: string //name of the github repo to pull timestamp from
    lastUpdated?: string //raw timestamp string if not a github project
    imgSrc?: string //image to display on summary card
    summary: string //blurb for this card
    internalLink?: string //link on the site to navigate to, e.g. /projects/dewy
    externalLink?: string //external link to navigate to for this card
}

export const projects: ProjectContent[] = [
    {
        title: 'Dewy Programming Language',
        github: 'dewy',
        imgSrc: dewy_dandelion,
        internalLink: '/projects/dewy',
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ipsum risus, fermentum non tellus nec, ultricies sollicitudin turpis. Mauris eu tincidunt felis, sit amet gravida sapien. Nullam dapibus nec velit pellentesque dapibus. Duis in purus ornare, pharetra metus non, commodo risus. Nunc condimentum augue eget elementum efficitur. In et lorem a risus rutrum pretium. Fusce at fringilla libero, sed molestie diam. Mauris lobortis metus vel sollicitudin vulputate. Ut vel rutrum eros. Pellentesque molestie ante eu diam sollicitudin, in pellentesque dolor finibus. Donec mattis quis mi id posuere. Nam enim justo, venenatis quis diam sed, luctus tempus nisi. Cras viverra tellus justo, vel scelerisque ex eleifend quis. Etiam malesuada aliquet ultrices. Pellentesque luctus nibh vel posuere tempus.
        Praesent posuere fringilla rhoncus. Morbi viverra porta elit, tincidunt aliquet enim blandit a. Proin mollis leo consequat, consequat justo quis, vulputate metus. In ut dignissim nunc, eget efficitur eros. Integer sit amet viverra lectus. Aliquam erat volutpat. Donec egestas facilisis eros. In dictum est a enim congue malesuada suscipit commodo urna. Etiam condimentum eu ex vel ultricies. Curabitur pulvinar nisl sed diam semper porta. Sed mi quam, efficitur ut quam eu, aliquet tincidunt ipsum. Cras non diam dignissim, sollicitudin quam id, dignissim ligula.
        Phasellus quis ipsum consectetur, tincidunt quam quis, semper mauris. Donec nec dui nec eros facilisis porttitor. Ut mi eros, consectetur et ex sed, hendrerit consequat nibh. Vivamus eu odio vel lorem interdum mollis et at magna. Etiam iaculis nisl ex, et mattis turpis aliquet quis. Ut velit nibh, dignissim ultrices velit semper, egestas sollicitudin libero. Vestibulum commodo sodales enim a bibendum. Aliquam aliquet, dui bibendum suscipit sollicitudin, ipsum ligula scelerisque eros, ac efficitur odio ex sed sem. Proin quis quam nec enim efficitur porta. Aenean luctus posuere nisi id tempor. Pellentesque non hendrerit nibh. Proin efficitur suscipit neque. Suspendisse faucibus suscipit dolor in efficitur. Quisque vitae tempor enim. Nulla dolor nisi, finibus ac tortor a, euismod interdum eros.`,
    },
    {
        title: 'Personal Website',
        github: 'website',
        imgSrc: logo_slim,
        externalLink: 'https://github.com/david-andrew/website',
        summary: `My personal website, written in react/typescript`,
    },
    {
        title: 'Escort Mission 2020',
        imgSrc: escort_mission,
        lastUpdated: 'December 21 2012',
        summary: `Fusce dictum dolor varius orci aliquet posuere. Donec interdum dui condimentum elit posuere, eu iaculis metus tincidunt. Curabitur pulvinar vitae leo ut placerat. Suspendisse interdum sollicitudin magna, quis iaculis risus. Nunc dictum consequat lacus, quis fermentum sapien congue ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sit amet porttitor neque. Donec sit amet euismod urna. Cras sit amet molestie est.
        Praesent ultricies, enim sed tincidunt pretium, magna mi suscipit mi, in efficitur neque nunc a massa. Donec tempus pretium iaculis. Nulla eget auctor dolor, eget ultrices sapien. Suspendisse maximus felis vel velit vehicula ullamcorper. Donec sit amet bibendum nibh. Nunc eget luctus nisl. Nunc eleifend velit ipsum, eu facilisis diam vulputate ac. In facilisis magna non lorem sollicitudin, quis volutpat enim lobortis. In ornare diam et risus vestibulum, sit amet viverra nunc varius. Donec sollicitudin ligula ac ligula bibendum sagittis. Cras vehicula nisl elementum, dictum erat sollicitudin, maximus lacus. Nunc suscipit leo lobortis velit rutrum, at egestas lacus dignissim. Nunc sit amet dapibus odio, non facilisis mi. Ut in libero vitae quam convallis fringilla nec et tortor. Aliquam vel diam felis.
        Phasellus mollis tellus vitae mi consequat semper. Sed congue dolor nec metus tincidunt mollis. Mauris odio odio, ultrices sed congue id, gravida quis arcu. Etiam scelerisque dui hendrerit pretium hendrerit. Praesent congue odio ac scelerisque tristique. Praesent nec porta ex, in bibendum nisl. Mauris consectetur diam et nisi fermentum rhoncus. Phasellus et ex ut eros placerat elementum ac in enim. Suspendisse eu quam efficitur, tincidunt metus tempor, lacinia dui. Quisque sollicitudin magna nec nibh vestibulum, in viverra libero faucibus. Morbi gravida massa id commodo dignissim. Mauris posuere ut ligula nec cursus. Nunc convallis urna non enim dapibus placerat.
        Vestibulum eros metus, molestie sed cursus eu, dictum id est. Donec cursus massa ac accumsan porta. Ut luctus ipsum nec justo ultrices, quis laoreet sapien vehicula. Phasellus sagittis quis urna at faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras faucibus sit amet dolor blandit luctus. Donec id mi lectus. Suspendisse vel sem sapien. Aliquam rutrum, ex a ullamcorper pretium, elit nulla condimentum purus, quis efficitur tortor arcu nec massa. Aenean tincidunt mi a mi viverra, sed malesuada turpis vestibulum. Sed interdum in lectus in eleifend.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sit amet sapien vitae luctus. Sed nec porta odio. Donec augue nisl, maximus quis sem non, feugiat luctus eros. Fusce sollicitudin ac urna eget malesuada. Quisque eget ligula id nibh rhoncus tristique vel sed lorem. Aliquam erat volutpat. Curabitur quam diam, commodo vitae viverra et, facilisis non ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas quis felis nec dolor sagittis egestas sit amet sit amet nibh.
        Fusce accumsan dolor nec dolor pharetra, a gravida mauris vehicula. Duis vitae lorem risus. Pellentesque blandit dapibus bibendum. Nunc pharetra convallis magna sit amet sodales. In ac justo eu nisl vestibulum scelerisque. Vivamus id placerat purus. Donec efficitur velit eu libero consectetur interdum. Vestibulum tristique ante ut ipsum volutpat, quis varius ipsum faucibus.
        Nunc ac viverra elit. Integer justo odio, accumsan quis odio vel, consectetur dictum lacus. In feugiat dolor ac erat molestie fringilla. Nulla scelerisque ex sit amet lobortis eleifend. Aenean fermentum porta quam vehicula vehicula. Integer aliquet, nisi nec sollicitudin cursus, ligula libero fermentum lacus, eget pretium lectus sem et orci. Duis sed ex nec quam pulvinar iaculis. Duis in arcu sit amet lacus volutpat varius. Vivamus dictum, sem eu faucibus aliquam, felis risus scelerisque ligula, non mattis nulla lorem in lacus.
        Ut eu gravida arcu. Nunc convallis dui vitae turpis pellentesque, a tempor enim dignissim. Suspendisse lacus arcu, placerat a vulputate ac, facilisis sit amet ex. Integer nec ligula non urna rutrum faucibus in a nunc. Nulla maximus laoreet elit, vitae ornare erat accumsan nec. Pellentesque lobortis ex nec pharetra mattis. Donec posuere sit amet velit nec consequat. Praesent vestibulum tellus a orci ultricies, sed bibendum sapien malesuada. Ut convallis ante semper mauris luctus congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum eu felis ut vulputate. Sed congue volutpat purus ac semper. Aliquam sollicitudin, ligula et suscipit eleifend, ligula tellus tristique leo, id facilisis ex sem eget ipsum. Donec velit lorem, facilisis ut suscipit in, faucibus quis felis. Vestibulum mattis eros a felis suscipit rutrum. In hac habitasse platea dictumst.`,
    },
    {
        title: 'Another Example 3',
        imgSrc: logo,
        summary: `Fusce dictum dolor varius orci aliquet posuere. Donec interdum dui condimentum elit posuere, eu iaculis metus tincidunt. Curabitur pulvinar vitae leo ut placerat. Suspendisse interdum sollicitudin magna, quis iaculis risus. Nunc dictum consequat lacus, quis fermentum sapien congue ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sit amet porttitor neque. Donec sit amet euismod urna. Cras sit amet molestie est.
        Praesent ultricies, enim sed tincidunt pretium, magna mi suscipit mi, in efficitur neque nunc a massa. Donec tempus pretium iaculis. Nulla eget auctor dolor, eget ultrices sapien. Suspendisse maximus felis vel velit vehicula ullamcorper. Donec sit amet bibendum nibh. Nunc eget luctus nisl. Nunc eleifend velit ipsum, eu facilisis diam vulputate ac. In facilisis magna non lorem sollicitudin, quis volutpat enim lobortis. In ornare diam et risus vestibulum, sit amet viverra nunc varius. Donec sollicitudin ligula ac ligula bibendum sagittis. Cras vehicula nisl elementum, dictum erat sollicitudin, maximus lacus. Nunc suscipit leo lobortis velit rutrum, at egestas lacus dignissim. Nunc sit amet dapibus odio, non facilisis mi. Ut in libero vitae quam convallis fringilla nec et tortor. Aliquam vel diam felis.
        Phasellus mollis tellus vitae mi consequat semper. Sed congue dolor nec metus tincidunt mollis. Mauris odio odio, ultrices sed congue id, gravida quis arcu. Etiam scelerisque dui hendrerit pretium hendrerit. Praesent congue odio ac scelerisque tristique. Praesent nec porta ex, in bibendum nisl. Mauris consectetur diam et nisi fermentum rhoncus. Phasellus et ex ut eros placerat elementum ac in enim. Suspendisse eu quam efficitur, tincidunt metus tempor, lacinia dui. Quisque sollicitudin magna nec nibh vestibulum, in viverra libero faucibus. Morbi gravida massa id commodo dignissim. Mauris posuere ut ligula nec cursus. Nunc convallis urna non enim dapibus placerat. `,
    },
    {
        title: 'Another Example 4',
        imgSrc: logo,
        summary: `Fusce dictum dolor varius orci aliquet posuere. Donec interdum dui condimentum elit posuere, eu iaculis metus tincidunt. Curabitur pulvinar vitae leo ut placerat. Suspendisse interdum sollicitudin magna, quis iaculis risus. Nunc dictum consequat lacus, quis fermentum sapien congue ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sit amet porttitor neque. Donec sit amet euismod urna. Cras sit amet molestie est.
        Praesent ultricies, enim sed tincidunt pretium, magna mi suscipit mi, in efficitur neque nunc a massa. Donec tempus pretium iaculis. Nulla eget auctor dolor, eget ultrices sapien. Suspendisse maximus felis vel velit vehicula ullamcorper. Donec sit amet bibendum nibh. Nunc eget luctus nisl. Nunc eleifend velit ipsum, eu facilisis diam vulputate ac. In facilisis magna non lorem sollicitudin, quis volutpat enim lobortis. In ornare diam et risus vestibulum, sit amet viverra nunc varius. Donec sollicitudin ligula ac ligula bibendum sagittis. Cras vehicula nisl elementum, dictum erat sollicitudin, maximus lacus. Nunc suscipit leo lobortis velit rutrum, at egestas lacus dignissim. Nunc sit amet dapibus odio, non facilisis mi. Ut in libero vitae quam convallis fringilla nec et tortor. Aliquam vel diam felis.
        Phasellus mollis tellus vitae mi consequat semper. Sed congue dolor nec metus tincidunt mollis. Mauris odio odio, ultrices sed congue id, gravida quis arcu. Etiam scelerisque dui hendrerit pretium hendrerit. Praesent congue odio ac scelerisque tristique. Praesent nec porta ex, in bibendum nisl. Mauris consectetur diam et nisi fermentum rhoncus. Phasellus et ex ut eros placerat elementum ac in enim. Suspendisse eu quam efficitur, tincidunt metus tempor, lacinia dui. Quisque sollicitudin magna nec nibh vestibulum, in viverra libero faucibus. Morbi gravida massa id commodo dignissim. Mauris posuere ut ligula nec cursus. Nunc convallis urna non enim dapibus placerat. `,
    },
    {
        title: 'Another Example 5',
        imgSrc: logo,
        summary: `Fusce dictum dolor varius orci aliquet posuere. Donec interdum dui condimentum elit posuere, eu iaculis metus tincidunt. Curabitur pulvinar vitae leo ut placerat. Suspendisse interdum sollicitudin magna, quis iaculis risus. Nunc dictum consequat lacus, quis fermentum sapien congue ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sit amet porttitor neque. Donec sit amet euismod urna. Cras sit amet molestie est.
        Praesent ultricies, enim sed tincidunt pretium, magna mi suscipit mi, in efficitur neque nunc a massa. Donec tempus pretium iaculis. Nulla eget auctor dolor, eget ultrices sapien. Suspendisse maximus felis vel velit vehicula ullamcorper. Donec sit amet bibendum nibh. Nunc eget luctus nisl. Nunc eleifend velit ipsum, eu facilisis diam vulputate ac. In facilisis magna non lorem sollicitudin, quis volutpat enim lobortis. In ornare diam et risus vestibulum, sit amet viverra nunc varius. Donec sollicitudin ligula ac ligula bibendum sagittis. Cras vehicula nisl elementum, dictum erat sollicitudin, maximus lacus. Nunc suscipit leo lobortis velit rutrum, at egestas lacus dignissim. Nunc sit amet dapibus odio, non facilisis mi. Ut in libero vitae quam convallis fringilla nec et tortor. Aliquam vel diam felis.
        Phasellus mollis tellus vitae mi consequat semper. Sed congue dolor nec metus tincidunt mollis. Mauris odio odio, ultrices sed congue id, gravida quis arcu. Etiam scelerisque dui hendrerit pretium hendrerit. Praesent congue odio ac scelerisque tristique. Praesent nec porta ex, in bibendum nisl. Mauris consectetur diam et nisi fermentum rhoncus. Phasellus et ex ut eros placerat elementum ac in enim. Suspendisse eu quam efficitur, tincidunt metus tempor, lacinia dui. Quisque sollicitudin magna nec nibh vestibulum, in viverra libero faucibus. Morbi gravida massa id commodo dignissim. Mauris posuere ut ligula nec cursus. Nunc convallis urna non enim dapibus placerat. `,
    },
    {
        title: 'Another Example 6',
        imgSrc: logo,
        summary: `Fusce dictum dolor varius orci aliquet posuere. Donec interdum dui condimentum elit posuere, eu iaculis metus tincidunt. Curabitur pulvinar vitae leo ut placerat. Suspendisse interdum sollicitudin magna, quis iaculis risus. Nunc dictum consequat lacus, quis fermentum sapien congue ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sit amet porttitor neque. Donec sit amet euismod urna. Cras sit amet molestie est.
        Praesent ultricies, enim sed tincidunt pretium, magna mi suscipit mi, in efficitur neque nunc a massa. Donec tempus pretium iaculis. Nulla eget auctor dolor, eget ultrices sapien. Suspendisse maximus felis vel velit vehicula ullamcorper. Donec sit amet bibendum nibh. Nunc eget luctus nisl. Nunc eleifend velit ipsum, eu facilisis diam vulputate ac. In facilisis magna non lorem sollicitudin, quis volutpat enim lobortis. In ornare diam et risus vestibulum, sit amet viverra nunc varius. Donec sollicitudin ligula ac ligula bibendum sagittis. Cras vehicula nisl elementum, dictum erat sollicitudin, maximus lacus. Nunc suscipit leo lobortis velit rutrum, at egestas lacus dignissim. Nunc sit amet dapibus odio, non facilisis mi. Ut in libero vitae quam convallis fringilla nec et tortor. Aliquam vel diam felis.
        Phasellus mollis tellus vitae mi consequat semper. Sed congue dolor nec metus tincidunt mollis. Mauris odio odio, ultrices sed congue id, gravida quis arcu. Etiam scelerisque dui hendrerit pretium hendrerit. Praesent congue odio ac scelerisque tristique. Praesent nec porta ex, in bibendum nisl. Mauris consectetur diam et nisi fermentum rhoncus. Phasellus et ex ut eros placerat elementum ac in enim. Suspendisse eu quam efficitur, tincidunt metus tempor, lacinia dui. Quisque sollicitudin magna nec nibh vestibulum, in viverra libero faucibus. Morbi gravida massa id commodo dignissim. Mauris posuere ut ligula nec cursus. Nunc convallis urna non enim dapibus placerat. `,
    },
    {
        title: 'Another Example 7',
        imgSrc: logo,
        summary: `Fusce dictum dolor varius orci aliquet posuere. Donec interdum dui condimentum elit posuere, eu iaculis metus tincidunt. Curabitur pulvinar vitae leo ut placerat. Suspendisse interdum sollicitudin magna, quis iaculis risus. Nunc dictum consequat lacus, quis fermentum sapien congue ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sit amet porttitor neque. Donec sit amet euismod urna. Cras sit amet molestie est.
        Praesent ultricies, enim sed tincidunt pretium, magna mi suscipit mi, in efficitur neque nunc a massa. Donec tempus pretium iaculis. Nulla eget auctor dolor, eget ultrices sapien. Suspendisse maximus felis vel velit vehicula ullamcorper. Donec sit amet bibendum nibh. Nunc eget luctus nisl. Nunc eleifend velit ipsum, eu facilisis diam vulputate ac. In facilisis magna non lorem sollicitudin, quis volutpat enim lobortis. In ornare diam et risus vestibulum, sit amet viverra nunc varius. Donec sollicitudin ligula ac ligula bibendum sagittis. Cras vehicula nisl elementum, dictum erat sollicitudin, maximus lacus. Nunc suscipit leo lobortis velit rutrum, at egestas lacus dignissim. Nunc sit amet dapibus odio, non facilisis mi. Ut in libero vitae quam convallis fringilla nec et tortor. Aliquam vel diam felis.
        Phasellus mollis tellus vitae mi consequat semper. Sed congue dolor nec metus tincidunt mollis. Mauris odio odio, ultrices sed congue id, gravida quis arcu. Etiam scelerisque dui hendrerit pretium hendrerit. Praesent congue odio ac scelerisque tristique. Praesent nec porta ex, in bibendum nisl. Mauris consectetur diam et nisi fermentum rhoncus. Phasellus et ex ut eros placerat elementum ac in enim. Suspendisse eu quam efficitur, tincidunt metus tempor, lacinia dui. Quisque sollicitudin magna nec nibh vestibulum, in viverra libero faucibus. Morbi gravida massa id commodo dignissim. Mauris posuere ut ligula nec cursus. Nunc convallis urna non enim dapibus placerat. `,
    },
]
