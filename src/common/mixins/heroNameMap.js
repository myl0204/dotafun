export default {
  data() {
    return {
      heroNameMap: [
        {
          id: 1,
          name: 'npc_dota_hero_antimage',
          localized_name: 'Anti-Mage',
          chinese_name: '敌法师',
          primary_attr: 'agi',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Escape',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 2,
          name: 'npc_dota_hero_axe',
          localized_name: 'Axe',
          chinese_name: '蒙哥别摸我',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Initiator',
            'Durable',
            'Disabler',
            'Jungler'
          ],
          legs: 2
        },
        {
          id: 3,
          name: 'npc_dota_hero_bane',
          localized_name: 'Bane',
          chinese_name: '痛苦之源',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Disabler',
            'Nuker',
            'Durable'
          ],
          legs: 4
        },
        {
          id: 4,
          name: 'npc_dota_hero_bloodseeker',
          localized_name: 'Bloodseeker',
          chinese_name: '嗜血狂魔',
          primary_attr: 'agi',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Disabler',
            'Jungler',
            'Nuker',
            'Initiator'
          ],
          legs: 2
        },
        {
          id: 5,
          name: 'npc_dota_hero_crystal_maiden',
          localized_name: 'Crystal Maiden',
          chinese_name: '水晶室女',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Disabler',
            'Nuker',
            'Jungler'
          ],
          legs: 2
        },
        {
          id: 6,
          name: 'npc_dota_hero_drow_ranger',
          localized_name: 'Drow Ranger',
          chinese_name: '卓尔游侠',
          primary_attr: 'agi',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Disabler',
            'Pusher'
          ],
          legs: 2
        },
        {
          id: 7,
          name: 'npc_dota_hero_earthshaker',
          localized_name: 'Earthshaker',
          chinese_name: '撼地者',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Support',
            'Initiator',
            'Disabler',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 8,
          name: 'npc_dota_hero_juggernaut',
          localized_name: 'Juggernaut',
          chinese_name: '主宰',
          primary_attr: 'agi',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Pusher',
            'Escape'
          ],
          legs: 2
        },
        {
          id: 9,
          name: 'npc_dota_hero_mirana',
          localized_name: 'Mirana',
          chinese_name: '米拉娜',
          primary_attr: 'agi',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Support',
            'Escape',
            'Nuker',
            'Disabler'
          ],
          legs: 2
        },
        {
          id: 10,
          name: 'npc_dota_hero_morphling',
          localized_name: 'Morphling',
          chinese_name: '变体精灵',
          primary_attr: 'agi',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Escape',
            'Durable',
            'Nuker',
            'Disabler'
          ],
          legs: 0
        },
        {
          id: 11,
          name: 'npc_dota_hero_nevermore',
          localized_name: 'Shadow Fiend',
          chinese_name: '影魔',
          primary_attr: 'agi',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Nuker'
          ],
          legs: 0
        },
        {
          id: 12,
          name: 'npc_dota_hero_phantom_lancer',
          localized_name: 'Phantom Lancer',
          chinese_name: '幻影长矛手',
          primary_attr: 'agi',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Escape',
            'Pusher',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 13,
          name: 'npc_dota_hero_puck',
          localized_name: 'Puck',
          chinese_name: '帕克',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Initiator',
            'Disabler',
            'Escape',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 14,
          name: 'npc_dota_hero_pudge',
          localized_name: 'Pudge',
          chinese_name: '扒鸡',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Disabler',
            'Initiator',
            'Durable',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 15,
          name: 'npc_dota_hero_razor',
          localized_name: 'Razor',
          chinese_name: '剃刀',
          primary_attr: 'agi',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Durable',
            'Nuker',
            'Pusher'
          ],
          legs: 0
        },
        {
          id: 16,
          name: 'npc_dota_hero_sand_king',
          localized_name: 'Sand King',
          chinese_name: '沙王',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Initiator',
            'Disabler',
            'Support',
            'Nuker',
            'Escape',
            'Jungler'
          ],
          legs: 6
        },
        {
          id: 17,
          name: 'npc_dota_hero_storm_spirit',
          localized_name: 'Storm Spirit',
          chinese_name: '风暴之零',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Escape',
            'Nuker',
            'Initiator',
            'Disabler'
          ],
          legs: 2
        },
        {
          id: 18,
          name: 'npc_dota_hero_sven',
          localized_name: 'Sven',
          chinese_name: '斯温',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Disabler',
            'Initiator',
            'Durable',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 19,
          name: 'npc_dota_hero_tiny',
          localized_name: 'Tiny',
          chinese_name: '小小',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Nuker',
            'Pusher',
            'Initiator',
            'Durable',
            'Disabler'
          ],
          legs: 2
        },
        {
          id: 20,
          name: 'npc_dota_hero_vengefulspirit',
          localized_name: 'Vengeful Spirit',
          chinese_name: '复仇之魂',
          primary_attr: 'agi',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Initiator',
            'Disabler',
            'Nuker',
            'Escape'
          ],
          legs: 2
        },
        {
          id: 21,
          name: 'npc_dota_hero_windrunner',
          localized_name: 'Windranger',
          chinese_name: '风行者',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Support',
            'Disabler',
            'Escape',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 22,
          name: 'npc_dota_hero_zuus',
          localized_name: 'Zeus',
          chinese_name: '宙斯',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 23,
          name: 'npc_dota_hero_kunkka',
          localized_name: 'Kunkka',
          chinese_name: '昆卡',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Support',
            'Disabler',
            'Initiator',
            'Durable',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 25,
          name: 'npc_dota_hero_lina',
          localized_name: 'Lina',
          chinese_name: '莉娜',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Carry',
            'Nuker',
            'Disabler'
          ],
          legs: 2
        },
        {
          id: 26,
          name: 'npc_dota_hero_lion',
          localized_name: 'Lion',
          chinese_name: '莱恩',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Disabler',
            'Nuker',
            'Initiator'
          ],
          legs: 2
        },
        {
          id: 27,
          name: 'npc_dota_hero_shadow_shaman',
          localized_name: 'Shadow Shaman',
          chinese_name: '暗影恶魔',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Pusher',
            'Disabler',
            'Nuker',
            'Initiator'
          ],
          legs: 2
        },
        {
          id: 28,
          name: 'npc_dota_hero_slardar',
          localized_name: 'Slardar',
          chinese_name: '斯拉达',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Durable',
            'Initiator',
            'Disabler',
            'Escape'
          ],
          legs: 0
        },
        {
          id: 29,
          name: 'npc_dota_hero_tidehunter',
          localized_name: 'Tidehunter',
          chinese_name: '西瓜皮',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Initiator',
            'Durable',
            'Disabler',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 30,
          name: 'npc_dota_hero_witch_doctor',
          localized_name: 'Witch Doctor',
          chinese_name: '巫医',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Nuker',
            'Disabler'
          ],
          legs: 2
        },
        {
          id: 31,
          name: 'npc_dota_hero_lich',
          localized_name: 'Lich',
          chinese_name: '巫妖',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 32,
          name: 'npc_dota_hero_riki',
          localized_name: 'Riki',
          chinese_name: '力丸',
          primary_attr: 'agi',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Escape',
            'Disabler'
          ],
          legs: 2
        },
        {
          id: 33,
          name: 'npc_dota_hero_enigma',
          localized_name: 'Enigma',
          chinese_name: '谜团',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Disabler',
            'Jungler',
            'Initiator',
            'Pusher'
          ],
          legs: 0
        },
        {
          id: 34,
          name: 'npc_dota_hero_tinker',
          localized_name: 'Tinker',
          chinese_name: '修补匠',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Nuker',
            'Pusher'
          ],
          legs: 2
        },
        {
          id: 35,
          name: 'npc_dota_hero_sniper',
          localized_name: 'Sniper',
          chinese_name: '火枪',
          primary_attr: 'agi',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 36,
          name: 'npc_dota_hero_necrolyte',
          localized_name: 'Necrophos',
          chinese_name: '死灵法师',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Nuker',
            'Durable',
            'Disabler'
          ],
          legs: 2
        },
        {
          id: 37,
          name: 'npc_dota_hero_warlock',
          localized_name: 'Warlock',
          chinese_name: '术士',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Initiator',
            'Disabler'
          ],
          legs: 2
        },
        {
          id: 38,
          name: 'npc_dota_hero_beastmaster',
          localized_name: 'Beastmaster',
          chinese_name: '兽王',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Initiator',
            'Disabler',
            'Durable',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 39,
          name: 'npc_dota_hero_queenofpain',
          localized_name: 'Queen of Pain',
          chinese_name: '痛苦女王',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Nuker',
            'Escape'
          ],
          legs: 2
        },
        {
          id: 40,
          name: 'npc_dota_hero_venomancer',
          localized_name: 'Venomancer',
          chinese_name: '剧毒术士',
          primary_attr: 'agi',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Nuker',
            'Initiator',
            'Pusher',
            'Disabler'
          ],
          legs: 0
        },
        {
          id: 41,
          name: 'npc_dota_hero_faceless_void',
          localized_name: 'Faceless Void',
          chinese_name: 'jj脸',
          primary_attr: 'agi',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Initiator',
            'Disabler',
            'Escape',
            'Durable'
          ],
          legs: 2
        },
        {
          id: 42,
          name: 'npc_dota_hero_skeleton_king',
          localized_name: 'Wraith King',
          chinese_name: '骷髅王',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Support',
            'Durable',
            'Disabler',
            'Initiator'
          ],
          legs: 2
        },
        {
          id: 43,
          name: 'npc_dota_hero_death_prophet',
          localized_name: 'Death Prophet',
          chinese_name: '死亡先知',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Pusher',
            'Nuker',
            'Disabler'
          ],
          legs: 2
        },
        {
          id: 44,
          name: 'npc_dota_hero_phantom_assassin',
          localized_name: 'Phantom Assassin',
          chinese_name: '幻影刺客',
          primary_attr: 'agi',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Escape'
          ],
          legs: 2
        },
        {
          id: 45,
          name: 'npc_dota_hero_pugna',
          localized_name: 'Pugna',
          chinese_name: '帕格纳',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Nuker',
            'Pusher'
          ],
          legs: 2
        },
        {
          id: 46,
          name: 'npc_dota_hero_templar_assassin',
          localized_name: 'Templar Assassin',
          chinese_name: '圣堂刺客',
          primary_attr: 'agi',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Escape'
          ],
          legs: 2
        },
        {
          id: 47,
          name: 'npc_dota_hero_viper',
          localized_name: 'Viper',
          chinese_name: '毒龙',
          primary_attr: 'agi',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Durable',
            'Initiator',
            'Disabler'
          ],
          legs: 0
        },
        {
          id: 48,
          name: 'npc_dota_hero_luna',
          localized_name: 'Luna',
          chinese_name: '露娜',
          primary_attr: 'agi',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Nuker',
            'Pusher'
          ],
          legs: 2
        },
        {
          id: 49,
          name: 'npc_dota_hero_dragon_knight',
          localized_name: 'Dragon Knight',
          chinese_name: '龙骑士',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Pusher',
            'Durable',
            'Disabler',
            'Initiator',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 50,
          name: 'npc_dota_hero_dazzle',
          localized_name: 'Dazzle',
          chinese_name: '戴泽',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Nuker',
            'Disabler'
          ],
          legs: 2
        },
        {
          id: 51,
          name: 'npc_dota_hero_rattletrap',
          localized_name: 'Clockwerk',
          chinese_name: '发条',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Initiator',
            'Disabler',
            'Durable',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 52,
          name: 'npc_dota_hero_leshrac',
          localized_name: 'Leshrac',
          chinese_name: '老鹿',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Support',
            'Nuker',
            'Pusher',
            'Disabler'
          ],
          legs: 4
        },
        {
          id: 53,
          name: 'npc_dota_hero_furion',
          localized_name: 'Nature\'s Prophet',
          chinese_name: '先知',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Jungler',
            'Pusher',
            'Escape',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 54,
          name: 'npc_dota_hero_life_stealer',
          localized_name: 'Lifestealer',
          chinese_name: '小狗',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Durable',
            'Jungler',
            'Escape',
            'Disabler'
          ],
          legs: 2
        },
        {
          id: 55,
          name: 'npc_dota_hero_dark_seer',
          localized_name: 'Dark Seer',
          chinese_name: '兔子',
          primary_attr: 'int',
          attack_type: 'Melee',
          roles: [
            'Initiator',
            'Jungler',
            'Escape',
            'Disabler'
          ],
          legs: 2
        },
        {
          id: 56,
          name: 'npc_dota_hero_clinkz',
          localized_name: 'Clinkz',
          chinese_name: '克林克兹',
          primary_attr: 'agi',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Escape',
            'Pusher'
          ],
          legs: 2
        },
        {
          id: 57,
          name: 'npc_dota_hero_omniknight',
          localized_name: 'Omniknight',
          chinese_name: '全能',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Support',
            'Durable',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 58,
          name: 'npc_dota_hero_enchantress',
          localized_name: 'Enchantress',
          chinese_name: '小鹿',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Jungler',
            'Pusher',
            'Durable',
            'Disabler'
          ],
          legs: 4
        },
        {
          id: 59,
          name: 'npc_dota_hero_huskar',
          localized_name: 'Huskar',
          chinese_name: '哈斯卡',
          primary_attr: 'str',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Durable',
            'Initiator'
          ],
          legs: 2
        },
        {
          id: 60,
          name: 'npc_dota_hero_night_stalker',
          localized_name: 'Night Stalker',
          chinese_name: '夜魔',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Initiator',
            'Durable',
            'Disabler',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 61,
          name: 'npc_dota_hero_broodmother',
          localized_name: 'Broodmother',
          chinese_name: '蜘蛛?',
          primary_attr: 'agi',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Pusher',
            'Escape',
            'Nuker'
          ],
          legs: 8
        },
        {
          id: 62,
          name: 'npc_dota_hero_bounty_hunter',
          localized_name: 'Bounty Hunter',
          chinese_name: '赏金猎人',
          primary_attr: 'agi',
          attack_type: 'Melee',
          roles: [
            'Escape',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 63,
          name: 'npc_dota_hero_weaver',
          localized_name: 'Weaver',
          chinese_name: '蚂蚁',
          primary_attr: 'agi',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Escape'
          ],
          legs: 4
        },
        {
          id: 64,
          name: 'npc_dota_hero_jakiro',
          localized_name: 'Jakiro',
          chinese_name: '双头龙',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Nuker',
            'Pusher',
            'Disabler'
          ],
          legs: 2
        },
        {
          id: 65,
          name: 'npc_dota_hero_batrider',
          localized_name: 'Batrider',
          chinese_name: 'XB骑士',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Initiator',
            'Jungler',
            'Disabler',
            'Escape'
          ],
          legs: 2
        },
        {
          id: 66,
          name: 'npc_dota_hero_chen',
          localized_name: 'Chen',
          chinese_name: '陈',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Jungler',
            'Pusher'
          ],
          legs: 2
        },
        {
          id: 67,
          name: 'npc_dota_hero_spectre',
          localized_name: 'Spectre',
          chinese_name: '幽鬼',
          primary_attr: 'agi',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Durable',
            'Escape'
          ],
          legs: 0
        },
        {
          id: 68,
          name: 'npc_dota_hero_ancient_apparition',
          localized_name: 'Ancient Apparition',
          chinese_name: '远古冰魄',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Disabler',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 69,
          name: 'npc_dota_hero_doom_bringer',
          localized_name: 'Doom',
          chinese_name: '末日爸爸',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Disabler',
            'Initiator',
            'Durable',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 70,
          name: 'npc_dota_hero_ursa',
          localized_name: 'Ursa',
          chinese_name: '抓抓熊',
          primary_attr: 'agi',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Jungler',
            'Durable',
            'Disabler'
          ],
          legs: 2
        },
        {
          id: 71,
          name: 'npc_dota_hero_spirit_breaker',
          localized_name: 'Spirit Breaker',
          chinese_name: '白牛',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Initiator',
            'Disabler',
            'Durable',
            'Escape'
          ],
          legs: 2
        },
        {
          id: 72,
          name: 'npc_dota_hero_gyrocopter',
          localized_name: 'Gyrocopter',
          chinese_name: '矮人直升机',
          primary_attr: 'agi',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Nuker',
            'Disabler'
          ],
          legs: 2
        },
        {
          id: 73,
          name: 'npc_dota_hero_alchemist',
          localized_name: 'Alchemist',
          chinese_name: '炼金术士',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Support',
            'Durable',
            'Disabler',
            'Initiator',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 74,
          name: 'npc_dota_hero_invoker',
          localized_name: 'Invoker',
          chinese_name: '卡尔',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Nuker',
            'Disabler',
            'Escape',
            'Pusher'
          ],
          legs: 2
        },
        {
          id: 75,
          name: 'npc_dota_hero_silencer',
          localized_name: 'Silencer',
          chinese_name: '沉默术士',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Support',
            'Disabler',
            'Initiator',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 76,
          name: 'npc_dota_hero_obsidian_destroyer',
          localized_name: 'Outworld Devourer',
          chinese_name: '黑鸟',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Nuker',
            'Disabler'
          ],
          legs: 4
        },
        {
          id: 77,
          name: 'npc_dota_hero_lycan',
          localized_name: 'Lycan',
          chinese_name: '狼人',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Pusher',
            'Jungler',
            'Durable',
            'Escape'
          ],
          legs: 2
        },
        {
          id: 78,
          name: 'npc_dota_hero_brewmaster',
          localized_name: 'Brewmaster',
          chinese_name: '熊猫酒仙',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Initiator',
            'Durable',
            'Disabler',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 79,
          name: 'npc_dota_hero_shadow_demon',
          localized_name: 'Shadow Demon',
          chinese_name: '暗影恶魔',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Disabler',
            'Initiator',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 80,
          name: 'npc_dota_hero_lone_druid',
          localized_name: 'Lone Druid',
          chinese_name: '德鲁伊',
          primary_attr: 'agi',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Pusher',
            'Jungler',
            'Durable'
          ],
          legs: 2
        },
        {
          id: 81,
          name: 'npc_dota_hero_chaos_knight',
          localized_name: 'Chaos Knight',
          chinese_name: '徐涅沙',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Disabler',
            'Durable',
            'Pusher',
            'Initiator'
          ],
          legs: 2
        },
        {
          id: 82,
          name: 'npc_dota_hero_meepo',
          localized_name: 'Meepo',
          chinese_name: '米波',
          primary_attr: 'agi',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Escape',
            'Nuker',
            'Disabler',
            'Initiator',
            'Pusher'
          ],
          legs: 2
        },
        {
          id: 83,
          name: 'npc_dota_hero_treant',
          localized_name: 'Treant Protector',
          chinese_name: '大树',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Support',
            'Initiator',
            'Durable',
            'Disabler',
            'Escape'
          ],
          legs: 2
        },
        {
          id: 84,
          name: 'npc_dota_hero_ogre_magi',
          localized_name: 'Ogre Magi',
          chinese_name: '蓝胖',
          primary_attr: 'int',
          attack_type: 'Melee',
          roles: [
            'Support',
            'Nuker',
            'Disabler',
            'Durable',
            'Initiator'
          ],
          legs: 2
        },
        {
          id: 85,
          name: 'npc_dota_hero_undying',
          localized_name: 'Undying',
          chinese_name: '不朽尸王',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Support',
            'Durable',
            'Disabler',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 86,
          name: 'npc_dota_hero_rubick',
          localized_name: 'Rubick',
          chinese_name: '拉比克',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Disabler',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 87,
          name: 'npc_dota_hero_disruptor',
          localized_name: 'Disruptor',
          chinese_name: '萨尔',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Disabler',
            'Nuker',
            'Initiator'
          ],
          legs: 2
        },
        {
          id: 88,
          name: 'npc_dota_hero_nyx_assassin',
          localized_name: 'Nyx Assassin',
          chinese_name: '夜神夜神夜神',
          primary_attr: 'agi',
          attack_type: 'Melee',
          roles: [
            'Disabler',
            'Nuker',
            'Initiator',
            'Escape'
          ],
          legs: 6
        },
        {
          id: 89,
          name: 'npc_dota_hero_naga_siren',
          localized_name: 'Naga Siren',
          chinese_name: '小娜迦',
          primary_attr: 'agi',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Support',
            'Pusher',
            'Disabler',
            'Initiator',
            'Escape'
          ],
          legs: 0
        },
        {
          id: 90,
          name: 'npc_dota_hero_keeper_of_the_light',
          localized_name: 'Keeper of the Light',
          chinese_name: '光老头',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Nuker',
            'Disabler',
            'Jungler'
          ],
          legs: 2
        },
        {
          id: 91,
          name: 'npc_dota_hero_wisp',
          localized_name: 'Io',
          chinese_name: '小精灵',
          primary_attr: 'str',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Escape',
            'Nuker'
          ],
          legs: 0
        },
        {
          id: 92,
          name: 'npc_dota_hero_visage',
          localized_name: 'Visage',
          chinese_name: '维萨吉',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Nuker',
            'Durable',
            'Disabler',
            'Pusher'
          ],
          legs: 2
        },
        {
          id: 93,
          name: 'npc_dota_hero_slark',
          localized_name: 'Slark',
          chinese_name: '版本之子',
          primary_attr: 'agi',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Escape',
            'Disabler',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 94,
          name: 'npc_dota_hero_medusa',
          localized_name: 'Medusa',
          chinese_name: '美杜莎',
          primary_attr: 'agi',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Disabler',
            'Durable'
          ],
          legs: 0
        },
        {
          id: 95,
          name: 'npc_dota_hero_troll_warlord',
          localized_name: 'Troll Warlord',
          chinese_name: '巨魔',
          primary_attr: 'agi',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Pusher',
            'Disabler',
            'Durable'
          ],
          legs: 2
        },
        {
          id: 96,
          name: 'npc_dota_hero_centaur',
          localized_name: 'Centaur Warrunner',
          chinese_name: '半人马',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Durable',
            'Initiator',
            'Disabler',
            'Nuker',
            'Escape'
          ],
          legs: 4
        },
        {
          id: 97,
          name: 'npc_dota_hero_magnataur',
          localized_name: 'Magnus',
          chinese_name: '马格纳斯',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Initiator',
            'Disabler',
            'Nuker',
            'Escape'
          ],
          legs: 4
        },
        {
          id: 98,
          name: 'npc_dota_hero_shredder',
          localized_name: 'Timbersaw',
          chinese_name: '伐木机',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Nuker',
            'Durable',
            'Escape'
          ],
          legs: 2
        },
        {
          id: 99,
          name: 'npc_dota_hero_bristleback',
          localized_name: 'Bristleback',
          chinese_name: '刚被猪',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Durable',
            'Initiator',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 100,
          name: 'npc_dota_hero_tusk',
          localized_name: 'Tusk',
          chinese_name: '一拳超人',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Initiator',
            'Disabler',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 101,
          name: 'npc_dota_hero_skywrath_mage',
          localized_name: 'Skywrath Mage',
          chinese_name: '天怒',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Nuker',
            'Disabler'
          ],
          legs: 2
        },
        {
          id: 102,
          name: 'npc_dota_hero_abaddon',
          localized_name: 'Abaddon',
          chinese_name: '亚巴顿',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Support',
            'Carry',
            'Durable'
          ],
          legs: 2
        },
        {
          id: 103,
          name: 'npc_dota_hero_elder_titan',
          localized_name: 'Elder Titan',
          chinese_name: '大牛',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Initiator',
            'Disabler',
            'Nuker',
            'Durable'
          ],
          legs: 2
        },
        {
          id: 104,
          name: 'npc_dota_hero_legion_commander',
          localized_name: 'Legion Commander',
          chinese_name: '军团指挥官',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Disabler',
            'Initiator',
            'Durable',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 105,
          name: 'npc_dota_hero_techies',
          localized_name: 'Techies',
          chinese_name: '炸弹人',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Nuker',
            'Disabler'
          ],
          legs: 6
        },
        {
          id: 106,
          name: 'npc_dota_hero_ember_spirit',
          localized_name: 'Ember Spirit',
          chinese_name: '火猫',
          primary_attr: 'agi',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Escape',
            'Nuker',
            'Disabler',
            'Initiator'
          ],
          legs: 2
        },
        {
          id: 107,
          name: 'npc_dota_hero_earth_spirit',
          localized_name: 'Earth Spirit',
          chinese_name: '土猫',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Nuker',
            'Escape',
            'Disabler',
            'Initiator',
            'Durable'
          ],
          legs: 2
        },
        {
          id: 108,
          name: 'npc_dota_hero_abyssal_underlord',
          localized_name: 'Underlord',
          chinese_name: '大屁股',
          primary_attr: 'str',
          attack_type: 'Melee',
          roles: [
            'Support',
            'Nuker',
            'Disabler',
            'Durable',
            'Escape'
          ],
          legs: 2
        },
        {
          id: 109,
          name: 'npc_dota_hero_terrorblade',
          localized_name: 'Terrorblade',
          chinese_name: '恐怖利刃',
          primary_attr: 'agi',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Pusher',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 110,
          name: 'npc_dota_hero_phoenix',
          localized_name: 'Phoenix',
          chinese_name: '火鸡',
          primary_attr: 'str',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Nuker',
            'Initiator',
            'Escape',
            'Disabler'
          ],
          legs: 2
        },
        {
          id: 111,
          name: 'npc_dota_hero_oracle',
          localized_name: 'Oracle',
          chinese_name: '神谕',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Nuker',
            'Disabler',
            'Escape'
          ],
          legs: 2
        },
        {
          id: 112,
          name: 'npc_dota_hero_winter_wyvern',
          localized_name: 'Winter Wyvern',
          chinese_name: '冰龙',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Disabler',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 113,
          name: 'npc_dota_hero_arc_warden',
          localized_name: 'Arc Warden',
          chinese_name: '天穹守望者',
          primary_attr: 'agi',
          attack_type: 'Ranged',
          roles: [
            'Carry',
            'Escape',
            'Nuker'
          ],
          legs: 2
        },
        {
          id: 114,
          name: 'npc_dota_hero_monkey_king',
          localized_name: 'Monkey King',
          chinese_name: '大圣',
          primary_attr: 'agi',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Escape',
            'Disabler',
            'Initiator'
          ],
          legs: 2
        },
        {
          id: 119,
          name: 'npc_dota_hero_dark_willow',
          localized_name: 'Dark Willow',
          chinese_name: '小仙女',
          primary_attr: 'int',
          attack_type: 'Ranged',
          roles: [
            'Support',
            'Nuker',
            'Disabler',
            'Escape'
          ],
          legs: 2
        },
        {
          id: 120,
          name: 'npc_dota_hero_pangolier',
          localized_name: 'Pangolier',
          chinese_name: '滚滚',
          primary_attr: 'agi',
          attack_type: 'Melee',
          roles: [
            'Carry',
            'Nuker',
            'Disabler',
            'Durable',
            'Escape',
            'Initiator'
          ],
          legs: 2
        }
      ]
    }
  }
}
