function getBotResponse(userInput) {
    userInput = userInput.toLowerCase().trim();

    const input = userInput.trim().toLowerCase();

    // FAQ logic
    if (input === 'faq' || input === 'help') {
        return `Here are some common questions you can ask me:
        1. How do I buy skins in Valorant?
        2. What are Valorant agents?
        3. How can I get Valorant Points?
        4. How do I play ranked mode in Valorant?`;
    }

    if (input.includes('buy skins')) {
        return 'To buy Valorant skins, visit the in-game store where you can purchase skins using Valorant Points.';
    }
    if (input.includes('valorant agents')) {
        return 'Valorant agents are characters that you can choose to play in the game. Each agent has unique abilities.';
    }
    if (input.includes('valorant points')) {
        return 'Valorant Points can be purchased using real money from the in-game store.';
    }
    if (input.includes('ranked mode')) {
        return 'To play ranked mode, you need to complete a certain number of unranked games to unlock competitive play.';
    }

    // General Greetings
    if (userInput.includes('hi') || userInput.includes('hello') || userInput.includes('hey')) {
        return "Hello! I'm here to help you with buying Valorant items. You can ask me about skins, agents, Valorant Points, bundles, and more.";
    }

    // Buying Skins
    if (userInput.includes('buy skins')) {
        return "To buy Valorant skins, visit the in-game store where you can purchase skins using Valorant Points.";
    }

    // Buying Valorant Points
    if (userInput.includes('valorant points') || userInput.includes('vp')) {
        return "You can buy Valorant Points (VP) through the in-game payment options. Payment methods include credit cards, PayPal, or other regional payment systems.";
    }

    // Battle Pass Information
    if (userInput.includes('battle pass')) {
        return "The Valorant Battle Pass can be purchased in-game using Valorant Points. It provides various rewards including skins, gun buddies, and more. It typically lasts for a specific season.";
    }

    // Unlocking Agents
    if (userInput.includes('unlock agent') || userInput.includes('buy agent')) {
        return "To unlock agents in Valorant, you can either complete the agent contract by playing matches and earning XP or use Valorant Points to unlock them instantly.";
    }

    // Discount or Sale Information
    if (userInput.includes('discount') || userInput.includes('sale')) {
        return "Valorant rarely offers discounts on items, but bundles are occasionally available at a discounted price compared to purchasing individual items separately.";
    }

    // Bundle Information
    if (userInput.includes('bundle')) {
        return "Bundles are limited-time offers in the Valorant store that include a set of themed skins at a discounted rate. Keep an eye on the store for current available bundles.";
    }

    // How to Get Skins for Free
    if (userInput.includes('free skins') || userInput.includes('how to get free skins')) {
        return "You can get free skins by completing the Battle Pass (some skins are free) or by completing agent contracts, which occasionally include weapon skins.";
    }

    // About Rank and Competitive Play
    if (userInput.includes('rank') || userInput.includes('competitive')) {
        return "Valorant's rank system ranges from Iron to Radiant. To rank up, you need to consistently win games and perform well compared to your current rank. You need to complete placement matches to get a rank.";
    }

    // Game Mode Information
    if (userInput.includes('game modes') || userInput.includes('mode')) {
        return "Valorant offers several game modes including Unrated, Competitive, Deathmatch, Spike Rush, and more. Each mode has its unique rules and objectives.";
    }

    // Information About Maps
    if (userInput.includes('map') || userInput.includes('maps')) {
        return "Valorant currently features several maps such as Bind, Haven, Split, Ascent, Icebox, Breeze, Fracture, and Pearl. Each map has unique callouts and strategies.";
    }

    // Agents and Abilities
    if (userInput.includes('agent') && userInput.includes('abilities')) {
        return "Valorant agents are divided into four roles: Duelists, Sentinels, Initiators, and Controllers. Each agent has unique abilities that can help the team in different ways. You can view agent details in the in-game collection.";
    }

    // Support or Bug Reporting
    if (userInput.includes('support') || userInput.includes('bug')) {
        return "If you need support or want to report a bug, you can visit the Riot Games support page at https://support-valorant.riotgames.com/hc/en-us.";
    }

    // Store Rotation Information
    if (userInput.includes('store') && userInput.includes('rotation')) {
        return "Valorant's store rotates daily, offering different skins each day. The Night Market event occasionally appears and offers randomized skins at discounted rates.";
    }

    // Valorant Updates and Patch Notes
    if (userInput.includes('update') || userInput.includes('patch notes')) {
        return "Valorant updates bring balance changes, new agents, maps, or bug fixes. You can check the latest patch notes on the official Riot Games Valorant website.";
    }

    // System Requirements for Valorant
    if (userInput.includes('system requirements') || userInput.includes('pc requirements')) {
        return "To run Valorant, you need at least Windows 7/8/10, 4GB RAM, 1GB VRAM, and an Intel Core 2 Duo E8400. For best performance, a newer processor and GPU are recommended.";
    }

    // Gratitude Responses
    if (userInput.includes('thank you') || userInput.includes('thanks')) {
        return "You're very welcome! If you have more questions about Valorant, feel free to ask.";
    }

    // Goodbye Responses
    if (userInput.includes('bye') || userInput.includes('goodbye')) {
        return "Goodbye! Have fun playing Valorant. If you need anything else, I'm always here to help.";
    }

    // Default Response for Unrecognized Inputs
    return "I'm not sure how to help with that. You can ask me about buying skins, agents, Valorant Points, bundles, game modes, or anything related to Valorant shopping and gameplay.";
}

export default getBotResponse;