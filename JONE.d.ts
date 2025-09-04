/**
 * JONE游戏引擎TypeScript类型定义文件
 * 包含游戏核心类、接口、枚举和函数的完整类型定义
 * @fileoverview 传奇游戏引擎核心API类型定义
 * @version 1.0.0
 */

/** 当前文件名 */
declare const __filename: string;

/** 当前目录名 */
declare const __dirname: string;

/**
 * 模块加载函数
 * @param filePath 文件路径
 * @returns 加载的模块对象
 */
declare function require(filePath: string): any;

/**
 * 任务链接项接口
 * @interface TMissionLinkItem
 */
declare interface TMissionLinkItem {

}

/** 文件流创建模式 */
declare const fmCreate: number;
/** 文件流只读模式 */
declare const fmOpenRead: number;
/** 文件流只写模式 */
declare const fmOpenWrite: number;
/** 文件流读写模式 */
declare const fmOpenReadWrite: number;
/** 文件流独占模式 */
declare const fmExclusive: number;
/** 文件流兼容共享模式 */
declare const fmShareCompat: number;
/** 文件流独占共享模式 */
declare const fmShareExclusive: number;
/** 文件流拒绝写入共享模式 */
declare const fmShareDenyWrite: number;
/** 文件流拒绝读取共享模式 */
declare const fmShareDenyRead: number;
/** 文件流无拒绝共享模式 */
declare const fmShareDenyNone: number;

/** 商店物品列表类型 */
type TStoreItemList = any;

/**
 * 移动客户端功能按钮配置接口
 * @interface IMobileFunctionButton
 */
declare interface IMobileFunctionButton {
	/** 标签ID */
	Tag: number;
	/** 图标文件路径 */
	IconFile: string;
	/** 脚本标识 */
	ScriptFlag: string;
	/** 是否显示在停靠栏 */
	ShowDock: boolean;
}

/**
 * 参数类
 * 用于处理脚本参数的解析和管理
 * @class TArgs
 */
declare class TArgs {
	/** 整数参数数组 */
	Int: number[];
	/** 字符串参数数组 */
	Str: string[];
	/** 参数数量 */
	Count: number;
	/** 数据字符串 */
	DataString: string;

	/**
	 * 清空所有参数
	 */
	Clear(): void;

	/**
	 * 添加参数
	 * @param str 要添加的参数（字符串或数字）
	 */
	Add(str: string | number): void;

	/**
	 * 构造函数
	 */
	constructor();

	/**
	 * 解析参数字符串
	 * @param s 要解析的参数字符串
	 */
	ParseParams(s: string): void;
}

/**
 * 创建参数对象
 * @param params 参数字符串
 * @returns 参数对象
 */
declare function CreateTArgs(params: string): TArgs;

/**
 * 生成随机数
 * @param range 随机数范围（0到range-1）
 * @returns 随机数
 */
declare function random(range: number): number;

/**
 * 生成指定范围的随机数
 * @param min 最小值
 * @param max 最大值
 * @returns 指定范围内的随机数
 */
declare function randomRange(min: number, max: number): number;

/**
 * 格式化字符串
 * @param str 格式化模板字符串
 * @param param 参数数组
 * @returns 格式化后的字符串
 */
declare function format(str: string, param: any[]): string;

/**
 * 调试输出
 * @param str 要输出的调试信息
 */
declare function Debug(str: string): void;

/**
 * 截断数值的小数部分
 * @param value 要截断的数值
 * @returns 截断后的整数
 */
declare function Trunc(value: number): number;

/**
 * 将数据集转换为数组
 * @param dataSet 数据集对象
 * @param timeMode 时间模式（"unixtime"或"date"）
 * @returns 转换后的数组
 */
declare function ConvertDataSetToArray(dataSet: TDataSet, timeMode: "unixtime" | "date"): any[];

/**
 * 物品装备位置枚举
 * @enum TItemWhere
 */
declare enum TItemWhere {
	/** 衣服 */
	wDress,
	/** 武器 */
	wWeapon,
	/** 右手 */
	wRightHand,
	/** 项链 */
	wNecklace,
	/** 头盔 */
	wHelmet,
	/** 左手镯 */
	wArmringL,
	/** 右手镯 */
	wArmringR,
	/** 左戒指 */
	wRingL,
	/** 右戒指 */
	wRingR,
	/** 护身符 */
	wBujuk,
	/** 腰带 */
	wBelt,
	/** 靴子 */
	wBoots,
	/** 魅力 */
	wCharm,
	/** 面具 */
	wMask,
	/** 时装 */
	wFashion,
	/** 坐骑 */
	wMount,
	/** 盾牌 */
	wShield,
	/** 首饰盒1 */
	wJewelry1,
	/** 首饰盒2 */
	wJewelry2,
	/** 首饰盒3 */
	wJewelry3,
	/** 首饰盒4 */
	wJewelry4,
	/** 首饰盒5 */
	wJewelry5,
	/** 首饰盒6 */
	wJewelry6,
	/** 星座1 */
	wZodiac1,
	/** 星座2 */
	wZodiac2,
	/** 星座3 */
	wZodiac3,
	/** 星座4 */
	wZodiac4,
	/** 星座5 */
	wZodiac5,
	/** 星座6 */
	wZodiac6,
	/** 星座7 */
	wZodiac7,
	/** 星座8 */
	wZodiac8,
	/** 星座9 */
	wZodiac9,
	/** 星座10 */
	wZodiac10,
	/** 星座11 */
	wZodiac11,
	/** 星座12 */
	wZodiac12
}

/**
 * 攻击模式枚举
 * @enum TAttackMode
 */
declare enum TAttackMode {
	/** 全体攻击 */
	amAll,
	/** 和平模式 */
	amPeaceful,
	/** 夫妻模式 */
	amDear,
	/** 师父模式 */
	amMaster,
	/** 组队模式 */
	amGroup,
	/** 行会模式 */
	amGuild,
	/** 红名模式 */
	amRed,
	/** 国家模式 */
	amNation,
	/** 阵营模式 */
	amCamp
}

/**
 * 复活事件枚举
 * @enum TReAliveEvent
 */
declare enum TReAliveEvent {
	/** 戒指复活 */
	aeRing,
	/** 魔法复活 */
	aeMagic,
	/** 增益复活 */
	aeBuff,
	/** 命令复活 */
	aeCmd,
	/** 死亡超时复活 */
	aeDeathTimeOut,
	/** 门自动修复 */
	aeDoorAutoFix,
	/** 脚本复活 */
	aeScript,
	/** 怪物自动复活 */
	aeMonAutoAlive
}

/**
 * 功能标志枚举
 * @enum TFunctionFlag
 */
declare enum TFunctionFlag {
	/** 首饰盒功能 */
	ffJewelryBox,
	/** 星座功能 */
	ffZodiac
}


/**
 * 键盘按键代码枚举
 * @enum TKeyBoardCode
 */
declare enum TKeyBoardCode {
	/** 鼠标左键 */
	vkLButton = 0x01,
	/** 鼠标右键 */
	vkRButton = 0x02,
	/** 取消键 */
	vkCancel = 0x03,
	/** 鼠标中键 */
	vkMButton = 0x04,
	/** 鼠标X1键 */
	vkXButton1 = 0x05,
	/** 鼠标X2键 */
	vkXButton2 = 0x06,
	/** 退格键 */
	vkBack = 0x08,
	/** Tab键 */
	vkTab = 0x09,
	/** 换行键 */
	vkLineFeed = 0x0A,
	/** 清除键 */
	vkClear = 0x0C,
	/** 回车键 */
	vkReturn = 0x0D,
	/** Shift键 */
	vkShift = 0x10,
	/** Ctrl键 */
	vkControl = 0x11,
	/** Alt键 */
	vkMenu = 0x12,
	/** 暂停键 */
	vkPause = 0x13,
	/** 大写锁定键 */
	vkCapital = 0x14,
	/** 假名键 */
	vkKana = 0x15,
	/** 韩文键 */
	vkHangul = 0x15,
	/** 汉字键 */
	vkJunja = 0x17,
	/** 最终键 */
	vkFinal = 0x18,
	/** 汉字键 */
	vkHanja = 0x19,
	/** 日文汉字键 */
	vkKanji = 0x19,
	/** 转换键 */
	vkConvert = 0x1C,
	/** 非转换键 */
	vkNonConvert = 0x1D,
	/** 接受键 */
	vkAccept = 0x1E,
	/** 模式改变键 */
	vkModeChange = 0x1F,
	/** ESC键 */
	vkEscape = 0x1B,
	/** 空格键 */
	vkSpace = 0x20,
	/** Page Up键 */
	vkPrior = 0x21,
	/** Page Down键 */
	vkNext = 0x22,
	/** End键 */
	vkEnd = 0x23,
	/** Home键 */
	vkHome = 0x24,
	/** 左箭头键 */
	vkLeft = 0x25,
	/** 上箭头键 */
	vkUp = 0x26,
	/** 右箭头键 */
	vkRight = 0x27,
	/** 下箭头键 */
	vkDown = 0x28,
	/** 选择键 */
	vkSelect = 0x29,
	/** 打印键 */
	vkPrint = 0x2A,
	/** 执行键 */
	vkExecute = 0x2B,
	/** 截屏键 */
	vkSnapshot = 0x2C,
	/** 插入键 */
	vkInsert = 0x2D,
	/** 删除键 */
	vkDelete = 0x2E,
	/** 帮助键 */
	vkHelp = 0x2F,
	/** 数字键0 */
	vk0 = 0x30,  //  48 
	/** 数字键1 */
	vk1 = 0x31,  //  49 
	/** 数字键2 */
	vk2 = 0x32,  //  50 
	/** 数字键3 */
	vk3 = 0x33,  //  51 
	/** 数字键4 */
	vk4 = 0x34,  //  52 
	/** 数字键5 */
	vk5 = 0x35,  //  53 
	/** 数字键6 */
	vk6 = 0x36,  //  54 
	/** 数字键7 */
	vk7 = 0x37,  //  55 
	/** 数字键8 */
	vk8 = 0x38,  //  56 
	/** 数字键9 */
	vk9 = 0x39,  //  57 
	/** 字母键A */
	vkA = 0x41,  //  65 
	/** 字母键B */
	vkB = 0x42,  //  66 
	/** 字母键C */
	vkC = 0x43,  //  67 
	/** 字母键D */
	vkD = 0x44,  //  68 
	/** 字母键E */
	vkE = 0x45,  //  69 
	/** 字母键F */
	vkF = 0x46,  //  70 
	/** 字母键G */
	vkG = 0x47,  //  71 
	/** 字母键H */
	vkH = 0x48,  //  72 
	/** 字母键I */
	vkI = 0x49,  //  73 
	/** 字母键J */
	vkJ = 0x4A,  //  74 
	/** 字母键K */
	vkK = 0x4B,  //  75 
	/** 字母键L */
	vkL = 0x4C,  //  76 
	/** 字母键M */
	vkM = 0x4D,  //  77 
	/** 字母键N */
	vkN = 0x4E,  //  78 
	/** 字母键O */
	vkO = 0x4F,  //  79 
	/** 字母键P */
	vkP = 0x50,  //  80 
	/** 字母键Q */
	vkQ = 0x51,  //  81 
	/** 字母键R */
	vkR = 0x52,  //  82 
	/** 字母键S */
	vkS = 0x53,  //  83 
	/** 字母键T */
	vkT = 0x54,  //  84 
	/** 字母键U */
	vkU = 0x55,  //  85 
	/** 字母键V */
	vkV = 0x56,  //  86 
	/** 字母键W */
	vkW = 0x57,  //  87 
	/** 字母键X */
	vkX = 0x58,  //  88 
	/** 字母键Y */
	vkY = 0x59,  //  89 
	/** 字母键Z */
	vkZ = 0x5A,  //  90 

	/** 左Windows键 */
	vkLWin = 0x5B,  //  91 
	/** 右Windows键 */
	vkRWin = 0x5C,  //  92 
	/** 应用程序键 */
	vkApps = 0x5D,  //  93 
	/** 睡眠键 */
	vkSleep = 0x5F,  //  95 

	/** 小键盘0 */
	vkNumpad0 = 0x60,  //  96 
	/** 小键盘1 */
	vkNumpad1 = 0x61,  //  97 
	/** 小键盘2 */
	vkNumpad2 = 0x62,  //  98 
	/** 小键盘3 */
	vkNumpad3 = 0x63,  //  99 
	/** 小键盘4 */
	vkNumpad4 = 0x64,  // 100 
	/** 小键盘5 */
	vkNumpad5 = 0x65,  // 101 
	/** 小键盘6 */
	vkNumpad6 = 0x66,  // 102 
	/** 小键盘7 */
	vkNumpad7 = 0x67,  // 103 
	/** 小键盘8 */
	vkNumpad8 = 0x68,  // 104 
	/** 小键盘9 */
	vkNumpad9 = 0x69,  // 105 
	/** 小键盘乘号 */
	vkMultiply = 0x6A,  // 106 
	/** 小键盘加号 */
	vkAdd = 0x6B,  // 107 
	/** 小键盘分隔符 */
	vkSeparator = 0x6C,  // 108 
	/** 小键盘减号 */
	vkSubtract = 0x6D,  // 109 
	/** 小键盘小数点 */
	vkDecimal = 0x6E,  // 110 
	/** 小键盘除号 */
	vkDivide = 0x6F,  // 111 

	/** F1功能键 */
	vkF1 = 0x70,  // 112 
	/** F2功能键 */
	vkF2 = 0x71,  // 113 
	/** F3功能键 */
	vkF3 = 0x72,  // 114 
	/** F4功能键 */
	vkF4 = 0x73,  // 115 
	/** F5功能键 */
	vkF5 = 0x74,  // 116 
	/** F6功能键 */
	vkF6 = 0x75,  // 117 
	/** F7功能键 */
	vkF7 = 0x76,  // 118 
	/** F8功能键 */
	vkF8 = 0x77,  // 119 
	/** F9功能键 */
	vkF9 = 0x78,  // 120 
	/** F10功能键 */
	vkF10 = 0x79,  // 121 
	/** F11功能键 */
	vkF11 = 0x7A,  // 122 
	/** F12功能键 */
	vkF12 = 0x7B,  // 123 
	/** F13功能键 */
	vkF13 = 0x7C,  // 124 
	/** F14功能键 */
	vkF14 = 0x7D,  // 125 
	/** F15功能键 */
	vkF15 = 0x7E,  // 126 
	/** F16功能键 */
	vkF16 = 0x7F,  // 127 
	/** F17功能键 */
	vkF17 = 0x80,  // 128 
	/** F18功能键 */
	vkF18 = 0x81,  // 129 
	/** F19功能键 */
	vkF19 = 0x82,  // 130 
	/** F20功能键 */
	vkF20 = 0x83,  // 131 
	/** F21功能键 */
	vkF21 = 0x84,  // 132 
	/** F22功能键 */
	vkF22 = 0x85,  // 133 
	/** F23功能键 */
	vkF23 = 0x86,  // 134 
	/** F24功能键 */
	vkF24 = 0x87,  // 135 
}

/**
 * 鼠标按键定义枚举
 * @enum {number}
 */
declare enum TMouseButton {
	/** 鼠标左键 */
	mbLeft,
	/** 鼠标右键 */
	mbRight,
	/** 鼠标中键 */
	mbMiddle
}

/**
 * 客户端飘血类型枚举
 * 定义了游戏中各种伤害显示类型
 * @enum {number}
 */
declare enum TBleedType {
	/** 未知类型 */
	btNone = 0,
	/** 普通伤害 */
	btNormal = 1,
	/** 会心一击(无视防御) + 会心额外伤害 */
	btCritical = 2,
	/** 致命一击(双倍伤害 + 致命额外伤害) */
	btPunchHit = 3,
	/** 地图伤害事件 */
	btMapDamageEvent = 4,
	/** 伤害反弹 */
	btDamageRebound = 5,
	/** 施法伤害 */
	btSpell = 6,
	/** 地图自动恢复 */
	btMapRecovery = 7,
	/** 中毒伤害 */
	btPoison = 8,
	/** 等级变更 */
	btLevelChange = 9,
	/** 使用药品 */
	btUseMedicine = 10,
	/** 自动恢复(站立休息一定时间会恢复) */
	btAutoRecovery = 11,
	/** 治愈术 */
	btHealing = 12,
	/** 虹魔套装吸血 */
	btHongMoSuit = 13,
	/** 跑步掉血 */
	btRunTired = 14,
	/** 血魔石增加 */
	btHealthStone = 15,
	/** 饥饿系统 */
	btHunger = 16,
	/** 护身戒指减伤 */
	btMagicProtected = 17
}

/**
 * 伤害数值类型枚举
 * @enum {number}
 */
declare enum TDamageValueType {
	/** 生命值伤害 */
	dvtHP = 0,
	/** 魔法值伤害 */
	dvtMP = 1
}

/**
 * Buff状态类型枚举
 * 定义了游戏中各种状态效果
 * @enum {number}
 */
declare enum TBuffStatusType {
	/** 无状态 */
	stNone,
	/** 石化状态 */
	stStone,
	/** 禁止移动(行走和跑步都不允许) */
	stDenyMove,
	/** 禁止行走 */
	stDenyWalk,
	/** 禁止跑步 */
	stDenyRun,
	/** 禁止骑马 */
	stDenyHorseRun,
	/** 无敌状态 */
	stSuperMan,
	/** 无敌状态(只对怪物) */
	stSuperManForMon,
	/** 复活状态 */
	stRelive,
	/** 防复活状态 */
	stUnRelive,
	/** 隐身状态 */
	stObserver,
	/** 隐身状态(只对怪物) */
	stObserverForMon,
	/** 禁止使用技能 */
	stDenyUseMagic,
	/** 禁止使用物品 */
	stDenyUseItem,
	/** 防麻痹状态 */
	stUnParalysis,
	/** 防蛛网状态 */
	stUnLockRun,
	/** 防陷阱状态 */
	stUnTrap,
	/** 强制后仰 */
	stStruckAction,
	/** 强制无后仰 */
	stNoStruckAction
}

/**
 * 间隔作用的Buff类型枚举
 * 定义了Buff效果的触发间隔类型
 * @enum {number}
 */
declare enum TBuffIntervalType {
	/** 无间隔 */
	biNone,
	/** 自定义间隔 */
	biCustom,
	/** 生命值间隔 */
	biHP,
	/** 魔法值间隔 */
	biMP,
	/** 经验值间隔 */
	biExp
}

/**
 * 属性类型Buff枚举
 * 定义了各种属性增益效果类型
 * @enum {number}
 */
declare enum TBuffAbilityType {
	/** 无属性 */
	atNone,
	/** 最大生命值 */
	atMaxHP,
	/** 最大魔法值 */
	atMaxMP,
	/** 物理攻击力下限 */
	atDC,
	/** 物理攻击力上限 */
	atDCMax,
	/** 魔法攻击力下限 */
	atMC,
	/** 魔法攻击力上限 */
	atMCMax,
	/** 道术攻击力下限 */
	atSC,
	/** 道术攻击力上限 */
	atSCMax,
	/** 刺术攻击力下限 */
	atTC,
	/** 刺术攻击力上限 */
	atTCMax,
	/** 弓术攻击力下限 */
	atPC,
	/** 弓术攻击力上限 */
	atPCMax,
	/** 巫术攻击力下限 */
	atWC,
	/** 巫术攻击力上限 */
	atWCMax,
	/** 物理防御力下限 */
	atAC,
	/** 物理防御力上限 */
	atACMax,
	/** 魔法防御力下限 */
	atMAC,
	/** 魔法防御力上限 */
	atMacMax,
	/** 命中率 */
	atHitPoint,
	/** 攻击速度 */
	atHitSpeed,
	/** 移动速度 */
	atSpeedPoint,
	/** 幸运值 */
	atLucky,
	/** 生命恢复 */
	atHealthRecover,
	/** 魔法恢复 */
	atSpellRecover,
	/** 魔法躲避 */
	atAntiMagic,
	/** 中毒躲避 */
	atAntiPoison,
	/** 中毒恢复 */
	atPoisonRecover,
	/** 吸收伤害 */
	atAbsorbing,
	/** 伤害反弹 */
	atRebound,
	/** 攻击加成 */
	atAttackAdd,
	/** 致命一击 */
	atPunchHit,
	/** 会心一击 */
	atCriticalHit,
	/** 致命一击防御 */
	atPunchHitDef,
	/** 会心一击防御 */
	atCriticalHitDef
}

/**
 * 货币类型枚举
 * 定义了游戏中各种货币类型
 * @enum {number}
 */
declare enum TMoneyType {
	/** 无货币 */
	mtNone,
	/** 金币 */
	mtGold,
	/** 元宝 */
	mtGameGold,
	/** 游戏点 */
	mtGamePoint,
	/** 灵符 */
	mtGameGird,
	/** 金刚石 */
	mtGameDiamond,
	/** 泡点值 */
	mtPaoDian,
	/** 荣耀点 */
	mtGlory
}

/**
 * 拾取结果枚举
 * 定义了物品拾取的处理结果
 * @enum {number}
 */
declare enum TPickUpResult {
	/** 继续拾取 */
	purPickUp,
	/** 禁止拾取 */
	purPickStop,
	/** 禁止拾取并删除 */
	purPickStopDelete
}

/**
 * 替换字符串中的指定内容
 * @param srcStr 源字符串
 * @param oldPartten 要替换的旧内容
 * @param newPartten 新内容
 * @returns 替换后的字符串
 */
declare function ReplaceStr(srcStr: string, oldPartten: string, newPartten: string | number): string

/**
 * 返回两个数中的较大值
 * @param a 第一个数
 * @param b 第二个数
 * @returns 较大的数值
 */
declare function max(a: number, b: number): number

/**
 * 比较字符串并返回差异值
 * @param a 第一个字符串
 * @param b 第二个字符串
 * @returns 字符串比较结果
 */
declare function CompareStr(a: string, b: string): number

/**
 * 初始化随机数生成器
 */
declare function Randomize(): void;

/**
 * 将浮点数转换为字符串
 * @param value 要转换的浮点数
 * @returns 转换后的字符串
 */
declare function FloatToStr(value: number): string;

/**
 * 复制字符串的指定部分（兼容层函数，不建议使用）
 * @param str 源字符串
 * @param startIndex 起始索引
 * @param count 复制长度
 * @returns 复制的字符串
 */
declare function _Copy(str: string, startIndex: number, count: number): string

/**
 * 查找子字符串在源字符串中的位置（兼容层函数，不建议使用）
 * @param subStr 要查找的子字符串
 * @param srcStr 源字符串
 * @returns 子字符串的位置
 */
declare function _Pos(subStr: string, srcStr: string): number

/**
 * 检查字符是否在指定范围内
 * @param src 源字符串
 * @param low 范围下限
 * @param high 范围上限
 * @returns 字符代码
 */
declare function CharCodeIn(src: string, low: string, high: string): number

/**
 * 时间定义接口
 * 用于表示完整的时间信息
 */
declare interface TimeDef {
	/** 年份 */
	year: number,
	/** 月份 */
	month: number,
	/** 日期 */
	day: number,
	/** 小时 */
	hour: number,
	/** 分钟 */
	minute: number,
	/** 秒钟 */
	second: number,
	/** 毫秒 */
	msecond: number
}

/**
 * 数据库异步查询结果回调函数类型
 * @param error 错误信息，无错误时为空字符串
 * @param dataset 查询结果数据集
 */
declare type QueryDBAsyncResult = (error: string, dataset: TDataSet) => void

/**
 * 数据库异步执行结果回调函数类型
 * @param error 错误信息，无错误时为空字符串
 * @param affectRow 受影响的行数
 */
declare type ExecDBAsyncResult = (error: string, affectRow: number) => void

/**
 * HTTP异步请求结果回调函数类型
 * @param error 错误信息，无错误时为空字符串
 * @param result 请求结果
 */
declare type HttpAsyncResult = (error: string, result: string) => void

/**
 * 注册怪物类型
 * @param race 种族ID
 * @param clazz 怪物类
 * @returns 注册是否成功
 */
declare function RegisterMonster(race: number, clazz: typeof TMonster): boolean;

/**
 * 获取系统运行时间（毫秒）
 * @returns 系统运行时间
 */
declare function GetTickCount(): number;

/**
 * 提取字符串到列表中
 * @param spliteChar 分隔符数组
 * @param skipFirstChar 跳过的首字符数组
 * @param Value 要处理的字符串
 * @param List 结果列表
 */
declare function ExtractStrings(spliteChar: string[], skipFirstChar: string[], Value: string, List: TStringList): void;





/**
 * 角色基类
 * 所有游戏中的角色（玩家、NPC、怪物等）都继承自此类
 * 提供了角色的基本属性和行为方法
 * @class TActor
 */
declare class TActor {

	/** 
	 * 获取角色种族类型
	 * @returns 种族类型ID
	 */
	GetRaceType(): number;
	/** 角色种族类型（只读） */
	readonly RaceType: number;

	/** 
	 * 获取角色所在地图名称
	 * @returns 地图名称
	 */
	GetMapName(): string;
	/** 角色所在地图名称（只读） */
	readonly MapName: string;

	/** 
	 * 获取角色所在地图环境
	 * @returns 地图环境对象
	 */
	GetMap(): TEnvirnoment;
	/** 角色所在地图环境（只读） */
	readonly Map: TEnvirnoment;

	/** 
	 * 获取角色名称
	 * @returns 角色名称
	 */
	GetName(): string;
	/** 角色名称 */
	Name: string;
	/** 
	 * 设置角色名称
	 * @param Value 新的角色名称
	 */
	SetName(Value: string): void;

	/** 
	 * 获取角色在地图中的Y坐标
	 * @returns Y坐标
	 */
	GetMapY(): number;
	/** 角色在地图中的Y坐标（只读） */
	readonly MapY: number;

	/** 
	 * 获取角色在地图中的X坐标
	 * @returns X坐标
	 */
	GetMapX(): number;
	/** 角色在地图中的X坐标（只读） */
	readonly MapX: number;

	/** 
	 * 获取角色性别
	 * @returns 性别（0=男，1=女）
	 */
	GetGender(): number;
	/** 角色性别 */
	Gender: number;
	/** 
	 * 设置角色性别
	 * @param Value 性别值
	 */
	SetGender(Value: number): void;

	/** 
	 * 获取角色朝向
	 * @returns 朝向值（0-7）
	 */
	GetDirection(): number;
	/** 角色朝向 */
	Direction: number;
	/** 
	 * 设置角色朝向
	 * @param Value 朝向值
	 */
	SetDirection(Value: number): void;

	/** 
	 * 获取角色发型
	 * @returns 发型ID
	 */
	GetHair(): number;
	/** 角色发型 */
	Hair: number;
	/**
	 * 设置角色发型
	 * @param Value 发型ID
	 * @description 设置角色的发型外观
	 */
	SetHair(Value: number): void;

	/**
	 * 获取角色职业
	 * @returns 职业ID（0=战士，1=法师，2=道士，3=刺客，4=弓箭手，5=武僧）
	 * @description 获取角色的职业类型
	 */
	GetJob(): number;
	/** 角色职业 */
	Job: number;
	/**
	 * 设置角色职业
	 * @param Value 职业ID
	 * @description 设置角色的职业类型
	 */
	SetJob(Value: number): void;

	/**
	 * 获取角色国家
	 * @returns 国家ID
	 * @description 获取角色所属的国家
	 */
	GetNation(): number;
	/** 角色国家 */
	Nation: number;
	/**
	 * 设置角色国家
	 * @param Value 国家ID
	 * @description 设置角色所属的国家
	 */
	SetNation(Value: number): void;

	/**
	 * 获取角色阵营
	 * @returns 阵营ID
	 * @description 获取角色所属的阵营
	 */
	GetCamp(): number;
	/** 角色阵营 */
	Camp: number;
	/**
	 * 设置角色阵营
	 * @param Value 阵营ID
	 * @description 设置角色所属的阵营
	 */
	SetCamp(Value: number): void;
	/**
	 * 获取角色金币数量
	 * @returns 当前金币数量
	 * @description 获取角色当前拥有的金币数量
	 */
	GetGold(): number;
	/** 角色金币数量 */
	Gold: number;
	/**
	 * 设置角色金币数量
	 * @param Value 金币数量
	 * @description 设置角色的金币数量
	 */
	SetGold(Value: number): void;

	/**
	 * 获取角色最大金币数量
	 * @returns 最大金币数量
	 * @description 获取角色能够携带的最大金币数量
	 */
	GetMaxGold(): number;
	/** 角色最大金币数量（只读） */
	readonly MaxGold: number;

	/**
	 * 金币数量变化时的回调
	 * @description 当角色金币数量发生变化时触发的回调函数
	 */
	GoldChanged(): void;

	/**
	 * 获取角色PK点数
	 * @returns PK点数
	 * @description 获取角色的PK值，PK值越高表示杀人越多
	 */
	GetPkPoint(): number;
	/** 角色PK点数 */
	PkPoint: number;
	/**
	 * 设置角色PK点数
	 * @param Value PK点数
	 * @description 设置角色的PK值
	 */
	SetPkPoint(Value: number): void;

	/**
	 * 获取角色PK等级
	 * @returns PK等级
	 * @description 根据PK点数计算出的PK等级（白名、灰名、黄名、红名等）
	 */
	GetPkLevel(): number;
	/** 角色PK等级（只读） */
	readonly PkLevel: number;
	/**
	 * 获取角色是否为幽灵状态
	 * @returns true表示为幽灵状态
	 * @description 检查角色是否处于幽灵状态（死亡后的状态）
	 */
	GetGhost(): boolean;
	/** 角色是否为幽灵状态（只读） */
	readonly Ghost: boolean;

	/**
	 * 获取角色是否死亡
	 * @returns true表示已死亡
	 * @description 检查角色是否已经死亡
	 */
	GetDeath(): boolean;
	/** 角色是否死亡（只读） */
	readonly Death: boolean;

	/**
	 * 获取角色是否拥有坐骑
	 * @returns true表示拥有坐骑
	 * @description 检查角色是否拥有坐骑
	 */
	GetHasHorse(): boolean;
	/** 角色是否拥有坐骑（只读） */
	readonly HasHorse: boolean;

	/**
	 * 获取角色坐骑类型
	 * @returns 坐骑类型ID
	 * @description 获取角色当前坐骑的类型
	 */
	GetHorseType(): number;
	/** 角色坐骑类型 */
	HorseType: number;
	/**
	 * 设置角色坐骑类型
	 * @param Value 坐骑类型ID
	 * @description 设置角色的坐骑类型
	 */
	SetHorseType(Value: number): void;

	/**
	 * 获取角色是否在坐骑上
	 * @returns true表示正在骑乘
	 * @description 检查角色是否正在骑乘坐骑
	 */
	GetOnHorse(): boolean;
	/** 角色是否在坐骑上 */
	OnHorse: boolean;
	/**
	 * 设置角色是否在坐骑上
	 * @param Value true表示上马，false表示下马
	 * @description 设置角色的骑乘状态
	 */
	SetOnHorse(Value: boolean): void;
	/**
	 * 获取角色所属行会
	 * @returns 行会对象，如果未加入行会则返回null
	 * @description 获取角色当前所属的行会
	 */
	GetGuild(): TGuild;
	/** 角色所属行会（只读） */
	readonly Guild: TGuild;

	/**
	 * 获取角色所属城堡
	 * @returns 城堡对象，如果未拥有城堡则返回null
	 * @description 获取角色所属行会拥有的城堡
	 */
	GetCastle(): TUserCastle;
	/** 角色所属城堡（只读） */
	readonly Castle: TUserCastle;

	/**
	 * 获取角色是否加入行会
	 * @returns true表示已加入行会
	 * @description 检查角色是否已经加入了行会
	 */
	GetHasGuild(): boolean;
	/** 角色是否加入行会（只读） */
	readonly HasGuild: boolean;

	/**
	 * 获取角色行会名称
	 * @returns 行会名称，未加入行会时返回空字符串
	 * @description 获取角色所属行会的名称
	 */
	GetGuildName(): string;
	/** 角色行会名称（只读） */
	readonly GuildName: string;

	/**
	 * 获取角色行会职位名称
	 * @returns 职位名称（如：会长、副会长、成员等）
	 * @description 获取角色在行会中的职位名称
	 */
	GetGuildRankName(): string;
	/** 角色行会职位名称（只读） */
	readonly GuildRankName: string;

	/**
	 * 获取角色是否为行会会长
	 * @returns true表示是行会会长
	 * @description 检查角色是否为所属行会的会长
	 */
	GetIsGuildMaster(): boolean;
	/** 角色是否为行会会长（只读） */
	readonly IsGuildMaster: boolean;

	/**
	 * 获取角色是否为城堡主人
	 * @returns true表示是城堡主人
	 * @description 检查角色是否为城堡的主人（城堡行会会长）
	 */
	GetISCastleMaster(): boolean;
	/** 角色是否为城堡主人（只读） */
	readonly ISCastleMaster: boolean;

	/**
	 * 获取角色是否为城堡行会成员
	 * @returns true表示是城堡行会成员
	 * @description 检查角色是否为拥有城堡的行会成员
	 */
	GetISCastleGuild(): boolean;
	/** 角色是否为城堡行会成员（只读） */
	readonly ISCastleGuild: boolean;
	/**
	 * 获取角色是否在安全区
	 * @returns true表示在安全区内
	 * @description 检查角色是否处于安全区域内（安全区内不能PK）
	 */
	GetInSafeZone(): boolean;
	/** 角色是否在安全区（只读） */
	readonly InSafeZone: boolean;

	/**
	 * 获取角色检查状态
	 * @param Index 检查状态索引
	 * @returns 检查状态值
	 * @description 获取角色的特定检查状态标志
	 */
	GetCheck(Index: number): boolean;
	/**
	 * 设置角色检查状态
	 * @param Index 检查状态索引
	 * @param Value 状态值
	 * @description 设置角色的特定检查状态标志
	 */
	SetCheck(Index: number, Value: boolean): void;

	/**
	 * 获取角色所有随从数量
	 * @returns 随从总数量
	 * @description 获取角色当前拥有的所有随从数量
	 */
	GetSlaveAllCount(): number;
	/** 角色随从数量（只读） */
	readonly SlaveCount: number;

	/**
	 * 获取指定索引的随从
	 * @param Index 随从索引
	 * @returns 随从对象
	 * @description 获取指定索引位置的随从角色
	 */
	GetSlave(Index: number): TActor;

	/**
	 * 获取随从等级
	 * @returns 随从等级
	 * @description 获取随从的等级
	 */
	GetSlaveLevel(): number;
	/** 随从等级 */
	SlaveLevel: number;
	/**
	 * 设置随从等级
	 * @param Value 等级值
	 * @description 设置随从的等级
	 */
	SetSlaveLevel(Value: number): void;

	/**
	 * 获取指定物品的数量
	 * @param ItemName 物品名称
	 * @returns 物品数量
	 * @description 获取背包中指定名称物品的总数量
	 */
	GetItemCount(ItemName: string): number;

	/**
	 * 获取姿势创建者
	 * @returns 创建者角色对象
	 * @description 获取创建当前姿势状态的角色
	 */
	GetPoseCreate(): TActor;
	/** 姿势创建者（只读） */
	readonly PoseCreate: TActor;
	/**
	 * 获取角色当前生命值
	 * @returns 当前生命值
	 * @description 获取角色当前的生命值（HP）
	 */
	GetHP(): number;
	/** 角色当前生命值 */
	HP: number;
	/**
	 * 设置角色当前生命值
	 * @param Value 生命值
	 * @description 设置角色的当前生命值，不能超过最大生命值
	 */
	SetHP(Value: number): void;

	/**
	 * 获取角色最大生命值
	 * @returns 最大生命值
	 * @description 获取角色的最大生命值上限
	 */
	GetMaxHP(): number;
	/** 角色最大生命值 */
	MaxHP: number;
	/**
	 * 设置角色最大生命值
	 * @param Value 最大生命值
	 * @description 设置角色的最大生命值上限
	 */
	SetMaxHP(Value: number): void;

	/**
	 * 获取角色当前魔法值
	 * @returns 当前魔法值
	 * @description 获取角色当前的魔法值（MP）
	 */
	GetMP(): number;
	/** 角色当前魔法值 */
	MP: number;
	/**
	 * 设置角色当前魔法值
	 * @param Value 魔法值
	 * @description 设置角色的当前魔法值，不能超过最大魔法值
	 */
	SetMP(Value: number): void;

	/**
	 * 获取角色最大魔法值
	 * @returns 最大魔法值
	 * @description 获取角色的最大魔法值上限
	 */
	GetMaxMP(): number;
	/** 角色最大魔法值 */
	MaxMP: number;
	/**
	 * 设置角色最大魔法值
	 * @param Value 最大魔法值
	 * @description 设置角色的最大魔法值上限
	 * @returns 设置后的最大魔法值
	 */
	SetMaxMP(Value: number): number;
	/** 获取角色最小物理攻击力 */
	GetDCMin(): number;
	/** 角色最小物理攻击力 */
	DCMin: number;
	/** 设置角色最小物理攻击力 */
	SetDCMin(Value: number): void;
	/** 获取角色最大物理攻击力 */
	GetDCMax(): number;
	/** 角色最大物理攻击力 */
	DCMax: number;
	/** 设置角色最大物理攻击力 */
	SetDCMax(Value: number): void;
	/** 获取角色最小魔法攻击力 */
	GetMCMin(): number;
	/** 角色最小魔法攻击力 */
	MCMin: number;
	/** 设置角色最小魔法攻击力 */
	SetMCMin(Value: number): void;
	/** 获取角色最大魔法攻击力 */
	GetMCMax(): number;
	/** 角色最大魔法攻击力 */
	MCMax: number;
	/** 设置角色最大魔法攻击力 */
	SetMCMax(Value: number): void;
	/** 获取角色最小道术攻击力 */
	GetSCMin(): number;
	/** 角色最小道术攻击力 */
	SCMin: number;
	/** 设置角色最小道术攻击力 */
	SetSCMin(Value: number): void;
	/** 获取角色最大道术攻击力 */
	GetSCMax(): number;
	/** 角色最大道术攻击力 */
	SCMax: number;
	/** 设置角色最大道术攻击力 */
	SetSCMax(Value: number): void;
	/** 获取角色最小毒素攻击力 */
	GetTCMin(): number;
	/** 角色最小毒素攻击力 */
	TCMin: number;
	/** 设置角色最小毒素攻击力 */
	SetTCMin(Value: number): void;
	/** 获取角色最大毒素攻击力 */
	GetTCMax(): number;
	/** 角色最大毒素攻击力 */
	TCMax: number;
	/** 设置角色最大毒素攻击力 */
	SetTCMax(Value: number): void;
	/** 获取角色最小神圣攻击力 */
	GetPCMin(): number;
	/** 角色最小神圣攻击力 */
	PCMin: number;
	/** 设置角色最小神圣攻击力 */
	SetPCMin(Value: number): void;
	/** 获取角色最大神圣攻击力 */
	GetPCMax(): number;
	/** 角色最大神圣攻击力 */
	PCMax: number;
	/** 设置角色最大神圣攻击力 */
	SetPCMax(Value: number): void;
	/** 获取角色最小武器攻击力 */
	GetWCMin(): number;
	/** 角色最小武器攻击力 */
	WCMin: number;
	/** 设置角色最小武器攻击力 */
	SetWCMin(Value: number): void;
	/** 获取角色最大武器攻击力 */
	GetWCMax(): number;
	/** 角色最大武器攻击力 */
	WCMax: number;
	/** 设置角色最大武器攻击力 */
	SetWCMax(Value: number): void;
	/** 获取角色最小物理防御力 */
	GetACMin(): number;
	/** 角色最小物理防御力 */
	ACMin: number;
	/** 设置角色最小物理防御力 */
	SetACMin(Value: number): void;
	/** 获取角色最大物理防御力 */
	GetACMax(): number;
	/** 角色最大物理防御力 */
	ACMax: number;
	/** 设置角色最大物理防御力 */
	SetACMax(Value: number): void;
	/** 获取角色最小魔法防御力 */
	GetMACMin(): number;
	/** 角色最小魔法防御力 */
	MACMin: number;
	/** 设置角色最小魔法防御力 */
	SetMACMin(Value: number): void;
	/** 获取角色最大魔法防御力 */
	GetMACMax(): number;
	/** 角色最大魔法防御力 */
	MACMax: number;
	/** 设置角色最大魔法防御力 */
	SetMACMax(Value: number): void;
	/** 获取角色速度点数 */
	GetSpeedPoint(): number;
	/** 角色速度点数 */
	SpeedPoint: number;
	/** 设置角色速度点数 */
	SetSpeedPoint(Value: number): void;
	/** 获取角色命中点数 */
	GetHitPoint(): number;
	/** 角色命中点数 */
	HitPoint: number;
	/** 设置角色命中点数 */
	SetHitPoint(Value: number): void;
	/** 获取角色攻击速度 */
	GetHitSpeed(): number;
	/** 角色攻击速度（只读） */
	readonly HitSpeed: number;
	/** 获取角色行走速度 */
	GetWalkSpeed(): number;
	/** 角色行走速度 */
	WalkSpeed: number;
	/** 设置角色行走速度 */
	SetWalkSpeed(Value: number): void;
	/** 获取角色行走步数 */
	GetWalkStep(): number;
	/** 角色行走步数 */
	WalkStep: number;
	/** 设置角色行走步数 */
	SetWalkStep(Value: number): void;
	/** 获取角色行走等待时间 */
	GetWalkWait(): number;
	/** 角色行走等待时间 */
	WalkWait: number;
	/** 设置角色行走等待时间 */
	SetWalkWait(Value: number): void;
	/** 获取角色攻击速度 */
	GetAttackSpeed(): number;
	/** 角色攻击速度 */
	AttackSpeed: number;
	/** 设置角色攻击速度 */
	SetAttackSpeed(Value: number): void;
	/** 获取角色幸运值 */
	GetLuck(): number;
	/** 角色幸运值（只读） */
	readonly Luck: number;
	/** 获取角色等级 */
	GetLevel(): number;
	/** 角色等级 */
	Level: number;
	/** 设置角色等级 */
	SetLevel(Value: number): void;
	/** 获取经验值来源者 */
	GetExpHitter(): TActor;
	/** 经验值来源者 */
	ExpHitter: TActor;
	/** 设置经验值来源者 */
	SetExpHitter(Value: TActor): void;
	/** 获取最后攻击者 */
	LastHitter(): TActor;
	/** 设置最后攻击者 */
	SetLastHitter(Value: TActor): void;
	/** 获取目标角色 */
	GetTargetActor(): TActor;
	/** 目标角色 */
	TargetActor: TActor;
	/** 设置目标角色 */
	SetTargetActor(Value: TActor): void;
	/** 设置目标角色（带锁定时间） */
	SetTargetActorEx(Value: TActor, LockTime: number): void;
	/** 获取最大背包容量 */
	GetMaxBagSize(): number;
	/** 最大背包容量 */
	MaxBagSize: number;
	/** 设置最大背包容量 */
	SetMaxBagSize(Value: number): void;
	/** 获取当前背包物品数量 */
	GetItemSize(): number;
	/** 当前背包物品数量（只读） */
	readonly ItemSize: number;
	/** 获取背包中指定索引的物品 */
	GetBagItem(Index: number): TUserItem;
	/** 获取指定位置的装备 */
	GetArmItem(AItemWhere: number): TUserItem;
	/** 装备物品（只读） */
	readonly ArmItem: TUserItem;
	/** 获取角色衣服 */
	GetDress(): TUserItem;
	/** 角色衣服（只读） */
	readonly Dress: TUserItem;
	/** 获取角色武器 */
	GetWepon(): TUserItem;
	/** 角色武器（只读） */
	readonly Wepon: TUserItem;
	/** 获取角色武器 */
	GetWeapon(): TUserItem;
	/** 角色武器（只读） */
	readonly Weapon: TUserItem;
	/** 获取角色项链 */
	GetNeckLace(): TUserItem;
	/** 角色项链（只读） */
	readonly NeckLace: TUserItem;
	/** 获取角色生肖装备 */
	GetZodiacs(index: number): TUserItem;
	/** 角色生肖装备（只读） */
	readonly Zodiacs: TUserItem;
	/** 获取角色首饰 */
	GetJewelrys(index: number): TUserItem;
	/** 角色首饰（只读） */
	readonly Jewelrys: TUserItem;
	/** 获取角色头盔 */
	GetHelmet(): TUserItem;
	/** 角色头盔（只读） */
	readonly Helmet: TUserItem;
	/** 获取角色右手装备 */
	GetRightHand(): TUserItem;
	/** 角色右手装备（只读） */
	readonly RightHand: TUserItem;
	/** 获取角色左手镯 */
	GetArmringLeft(): TUserItem;
	/** 角色左手镯（只读） */
	readonly ArmringLeft: TUserItem;
	/** 获取角色右手镯 */
	GetArmringRight(): TUserItem;
	/** 角色右手镯（只读） */
	readonly ArmringRight: TUserItem;
	/** 获取角色左戒指 */
	GetRingLeft(): TUserItem;
	/** 角色左戒指（只读） */
	readonly RingLeft: TUserItem;
	/** 获取角色右戒指 */
	GetRingRight(): TUserItem;
	/** 角色右戒指（只读） */
	readonly RingRight: TUserItem;
	/** 获取角色腰带 */
	GetBelt(): TUserItem;
	/** 角色腰带（只读） */
	readonly Belt: TUserItem;
	/** 获取角色靴子 */
	GetBoots(): TUserItem;
	/** 角色靴子（只读） */
	readonly Boots: TUserItem;
	/** 获取角色护符 */
	GetCharm(): TUserItem;
	/** 角色护符（只读） */
	readonly Charm: TUserItem;
	/** 获取角色面具 */
	GetMask(): TUserItem;
	/** 角色面具（只读） */
	readonly Mask: TUserItem;
	/** 获取角色护身符 */
	GetBujuk(): TUserItem;
	/** 角色护身符（只读） */
	readonly Bujuk: TUserItem;
	/** 获取角色时装 */
	GetFashion(): TUserItem;
	/** 角色时装（只读） */
	readonly Fashion: TUserItem;
	/** 获取角色坐骑 */
	GetMount(): TUserItem;
	/** 角色坐骑（只读） */
	readonly Mount: TUserItem;
	/** 获取角色盾牌 */
	GetShield(): TUserItem;
	/** 角色盾牌（只读） */
	readonly Shield: TUserItem;
	/** 清除所有技能 */
	ClearSkill(): void;
	/** 删除非职业技能 */
	DelNoJobSkill(): void;
	/** 删除指定技能 */
	DelSkill(ASkillName: string): void;
	/** 添加技能 */
	AddSkill: (ASkillName: string, SkillLevel?: number) => void;
	/** 查找指定技能 */
	FindSkill(ASkillName: string): TUserMagic;
	/** 改变技能等级 */
	ChangeSkillLevel(ASkillName: string, SkillLevel: number): void;
	/** 获取角色经验值 */
	GetExp(): number;
	/** 角色经验值 */
	Exp: number;
	/** 设置角色经验值 */
	SetExp(Exp: number): void;
	/** 获取角色最大经验值 */
	GetMaxExp(): number;
	/** 角色最大经验值（只读） */
	readonly MaxExp: number;
	/** 增加角色经验值 */
	AddExp(Value: number): void;
	/** 获取角色当前负重 */
	GetWeight(): number;
	/** 角色当前负重（只读） */
	readonly Weight: number;
	/** 获取角色最大负重 */
	GetMaxWeight(): number;
	/** 角色最大负重（只读） */
	readonly MaxWeight: number;
	/** 获取角色装备负重 */
	GetWearWeight(): number;
	/** 角色装备负重（只读） */
	readonly WearWeight: number;
	/** 获取角色最大装备负重 */
	GetMaxWearWeight(): number;
	/** 角色最大装备负重（只读） */
	readonly MaxWearWeight: number;
	/** 获取角色手持负重 */
	GetHandWeight(): number;
	/** 角色手持负重（只读） */
	readonly HandWeight: number;
	/** 获取角色最大手持负重 */
	GetMaxHandWeight(): number;
	/** 角色最大手持负重（只读） */
	readonly MaxHandWeight: number;
	/** 检查是否可以穿戴指定物品 */
	CheckCanTakeOnItem(AUserItem: TUserItem, ItemWhere: number): boolean;
	/** 检查是否可以卸下指定位置的装备 */
	CheckCanTakeOffItem(ItemWhere: number): boolean;
	/** 穿戴指定物品 */
	TakeOnItem(AUserItem: TUserItem, ItemWhere: number): void;
	/** 卸下指定位置的装备 */
	TakeOffItem(nItemWhere: number): void;
	/** 添加物品到背包 */
	AddItemToBag(Item: TUserItem): boolean;
	/** 角色死亡 */
	Die(): void;
	/** 角色死亡（指定经验值和物品归属） */
	GoDie(ExpOwner: TActor, ItemOwner: TActor): void;
	/** 使角色变成幽灵状态 死亡并消失 */
	MakeGhost(): void;
	/** 检查是否为玩家 */
	IsPlayer(): boolean;
	/** 检查是否为NPC */
	IsNPC(): boolean;
	/** 检查是否为怪物NPC */
	IsMonNPC(): boolean;
	/** 获取是否为未知角色 */
	GetIsUnknowActor(): boolean;
	/** 是否为未知角色 */
	IsUnknowActor: boolean;
	/** 设置是否为未知角色 */
	SetIsUnknowActor(Value: boolean): void;
	/** 获取是否为管理员模式 */
	GetIsAdminMode(): boolean;
	/** 是否为管理员模式 */
	IsAdminMode: boolean;
	/** 设置是否为管理员模式 */
	SetIsAdminMode(Value: boolean): void;
	/** 获取是否为超人模式 */
	GetSuperManMode(): boolean;
	/** 是否为超人模式 */
	SuperManMode: boolean;
	/** 设置是否为超人模式 */
	SetSuperManMode(Value: boolean): void;
	/** 获取是否为观察者模式 */
	GetObserverMode(): boolean;
	/** 是否为观察者模式 */
	ObserverMode: boolean;
	/** 设置是否为观察者模式 */
	SetObserverMode(Value: boolean): void;
	/** 获取角色权限 */
	GetPermission(): number;
	/** 角色权限 */
	Permission: number;
	/** 设置角色权限 */
	SetPermission(Value: number): void;
	/** 获取攻击模式 */
	GetAttackMode(): number;
	/** 攻击模式 */
	AttackMode: number;
	/** 设置攻击模式 */
	SetAttackMode(Value: number): void;
	/** 删除指定位置的装备 */
	DeleteUseItem(NWhere: number): void;
	/** 修复指定位置的装备 */
	RepairItem(NWhere: number): void;
	/** 修复所有装备 */
	RepairAll(): void;
	/** 获取角色名称颜色 */
	GetNameColor(): number;
	/** 角色名称颜色 */
	NameColor: number;
	/** 设置角色名称颜色 */
	SetNameColor(Value: number): void;
	/** 杀死指定随从 */
	KillSlave: (ASlaveName: string, ACount?: number) => void;
	/** 获取指定范围内的随从数量 */
	GetSideSlaveCount(Range: number, ASlaveName: string): number;
	/** 随从数量（只读） */
	readonly SideSlaveCount: number;
	/** 获取指定随从的数量 */
	GetSlaveCount(ASlaveName: string): number;
	/** 获取杀怪经验倍率 */
	GetKillMonExpRate(): number;
	/** 杀怪经验倍率 */
	KillMonExpRate: number;
	/** 设置杀怪经验倍率 */
	SetKillMonExpRate(Value: number): void;
	/** 改变杀怪经验倍率（带时间限制） */
	ChangeKillMonExpRate(ARate: number, ATime: number): void;
	/** 获取力量倍率 */
	GetPowerRate(): number;
	/** 力量倍率（只读） */
	readonly PowerRate: number;
	/** 改变力量倍率（带时间限制） */
	ChangePowerRate(ARate: number, ATime: number): void;
	/** 获取是否为管理员 */
	GetIsAdmin(): boolean;
	/** 是否为管理员（只读） */
	readonly IsAdmin: boolean;
	/** 获取是否为系统操作员 */
	GetISSysOp(): boolean;
	/** 是否为系统操作员（只读） */
	readonly ISSysOp: boolean;
	/** 杀死角色 */
	Kill: (AMode?: number) => void;
	/** 获取是否始终显示生命值 */
	GetAlwaysShowHP(): boolean;
	/** 是否始终显示生命值 */
	AlwaysShowHP: boolean;
	/** 设置是否始终显示生命值 */
	SetAlwaysShowHP(Value: boolean): void;
	/** 重新计算角色属性 */
	RecalcAbilitys(): void;
	/** 获取主人 */
	GetMaster(): TActor;
	/** 主人 */
	Master: TActor;
	/** 设置主人 */
	SetMaster(Master: TActor): void;
	/** 获取主人忠诚度计时 */
	GetMasterRoyaltyTick(): number;
	/** 主人忠诚度计时 */
	MasterRoyaltyTick: number;
	/** 设置主人忠诚度计时 */
	SetMasterRoyaltyTick(Value: number): void;
	/** 获取是否受保护 */
	GetProtect(): boolean;
	/** 是否受保护 */
	Protect: boolean;
	/** 设置是否受保护 */
	SetProtect(Value: boolean): void;
	/** 获取总属性值 */
	GetTotalAbility(): number;
	/** 总属性值（只读） */
	readonly TotalAbility: number;
	/** 获取掉落物品名称 */
	GetDropName(): string;
	/** 掉落物品名称 */
	DropName: string;
	/** 设置掉落物品名称 */
	SetDropName(Value: string): void;
	/** 获取是否不掉落物品 */
	GetNoDropItem(): boolean;
	/** 是否不掉落物品 */
	NoDropItem: boolean;
	/** 设置是否不掉落物品 */
	SetNoDropItem(Value: boolean): void;
	/** 获取是否不掉落使用物品 */
	GetNoDropUseItem(): boolean;
	/** 是否不掉落使用物品 */
	NoDropUseItem: boolean;
	/** 设置是否不掉落使用物品 */
	SetNoDropUseItem(Value: boolean): void;
	/** 获取角色数据 */
	GetData(): Object;
	/** 角色数据 */
	Data: Object;
	/** 设置角色数据 */
	SetData(Value: Object): void;
	/** 搜索视野范围内的对象 */
	SearchViewRange(): void;
	/** 清除视野范围 */
	ClearViewRange(): void;
	/** 魔法攻击指定坐标 */
	MagicAttackXY: (ATarget: TActor, ATargetX: number, ATargetY: number, AMagic: number, ClientPlayerHaveSpellAction?: boolean) => void;
	/** 魔法攻击指定坐标（扩展） */
	MagicAttackXYEx: (ATarget: TActor, ATargetX: number, ATargetY: number, AMagic: TUserMagic, ClientPlayerHaveSpellAction?: boolean) => void;
	/** 魔法攻击目标 */
	MagicAttack: (ATarget: TActor, AMagic: number, ClientPlayerHaveSpellAction?: boolean) => void;
	/** 魔法攻击目标（扩展） */
	MagicAttackEx: (ATarget: TActor, AMagic: TUserMagic, ClientPlayerHaveSpellAction?: boolean) => void;
	/** 群体魔法攻击 */
	MagicAttackGroup: (ATarget: TActor, ATargetX: number, ATargetY: number, AMagic: number, Level: number, Group: number, ClientPlayerHaveSpellAction?: boolean) => void;
	/** 对目标造成伤害 */
	Damage: (ATarget: TActor, AValue: number, MagicID?: number, MagicLevel?: number, ShowBleedNumber?: boolean) => void;
	/** 延迟对目标造成伤害 */
	DamageDelay: (ATarget: TActor, AValue: number, Delay: number, MagicID?: number, MagicLevel?: number, ShowBleedNumber?: boolean) => void;
	/** 创建攻击事件 */
	CreateAttackEvent: (AMapX: number, AMapY: number, ATime: number, AInterval: number, ADamage: number, SkillEffectID?: number, MagId?: number, MagLv?: number) => boolean;
	/** 创建攻击事件（扩展） */
	CreateAttackEvent2: (AMapX: number, AMapY: number, ATime: number, AInterval: number, ADamage: number, UIEffectID?: number, MagId?: number, MagLv?: number) => boolean;
	/** 移动到指定坐标 */
	MoveTo: (DestX: number, DestY: number, ARange?: number) => boolean;
	/** 检查状态 */
	CheckState(AState: number): boolean;
	/** 设置状态 */
	SetState(AState: number, ATime: number, AValue: number): void;
	/** 在指定区域内阻挡 */
	BlockInArea(Left: number, Top: number, Right: number, Bottom: number, Duration: number): void;
	/** 解除区域阻挡 */
	BreakBlockArea(): void;
	/** 推动角色 */
	Push(ADirection: number, AStep: number): number;
	/** 添加游戏日志1 */
	AddGameLog1(Event: string, ItemName: string, Amount: number, Log: string): void;
	/** 添加游戏日志2 */
	AddGameLog2(Event: string, Log: string): void;
	/** 添加游戏日志（扩展） */
	AddGameLogEx(Event: number, Int1: number, Int2: number, Log1: string, Log2: string): void;
	/** 获取技能数量 */
	GetSkillCount(): number;
	/** 技能数量（只读） */
	readonly SkillCount: number;
	/** 获取指定索引的技能 */
	GetSkills(Index: number): TUserMagic;
	/** 移动到指定地图坐标 */
	Move(sMapName: string, nX: number, nY: number): boolean;
	/** 变身成指定怪物 */
	ChangeToMonster(sMonName: string, nSec: number): void;
	/** 取消变身 */
	CancelToMonster(): void;
	/** 添加显示名称 */
	AddShowName(sName: string): void;
	/** 删除显示名称 */
	DelShowName(sName: string): void;
	/** 检查是否有显示名称 */
	HaveShowName(sName: string): boolean;
	/** 设置掉落物品倍率 */
	SetDropItemRate(Value: number): void;
	/** 获取掉落物品倍率 */
	GetDropItemRate(): number;
	/** 掉落物品倍率 */
	DropItemRate: number;
	/** 获取字符串变量 */
	GetSVar(Index: number): string;
	/** 字符串变量 */
	SVar: string;
	/** 获取数值变量 */
	GetNVar(Index: number): number;
	/** 数值变量 */
	NVar: number;
	/** 设置字符串变量 */
	SetSVar(Index: number, S: string): void;
	/** 设置数值变量 */
	SetNVar(Index: number, Value: number): void;
	/** 设置混合颜色 */
	SetBlendColor(Value: number): void;
	/** 获取混合颜色 */
	GetBlendColor(): number;
	/** 混合颜色 */
	BlendColor: number;
	/** 设置武器混合颜色 */
	SetWeaponBlendColor(Value: number): void;
	/** 获取武器混合颜色 */
	GetWeaponBlendColor(): number;
	/** 武器混合颜色 */
	WeaponBlendColor: number;
	/** 发送消息 */
	SendMessage: (Msg: string, Kind?: number) => void;
	/** 获取随从列表 */
	GetSlaveList(): TActorList;
	/** 随从列表（只读） */
	readonly SlaveList: TActorList;
	/** 获取随从是否休息 */
	GetSlaveRelax(): boolean;
	/** 随从是否休息 */
	SlaveRelax: boolean;
	/** 设置随从是否休息 */
	SetSlaveRelax(Value: boolean): void;
	/** 设置是否穿过怪物 */
	SetThroughMonster(Value: boolean): void;
	/** 获取是否穿过怪物 */
	GetThroughMonster(): boolean;
	/** 是否穿过怪物 */
	ThroughMonster: boolean;
	/** 设置是否穿过玩家 */
	SetThroughHuman(Value: boolean): void;
	/** 获取是否穿过玩家 */
	GetThroughHuman(): boolean;
	/** 是否穿过玩家 */
	ThroughHuman: boolean;
	/** 设置是否穿过NPC */
	SetThroughNPC(Value: boolean): void;
	/** 获取是否穿过NPC */
	GetThroughNPC(): boolean;
	/** 是否穿过NPC */
	ThroughNPC: boolean;
	/** 设置是否穿过守卫 */
	SetThroughGuard(Value: boolean): void;
	/** 获取是否穿过守卫 */
	GetThroughGuard(): boolean;
	/** 是否穿过守卫 */
	ThroughGuard: boolean;
	/** 重置穿过怪物状态 */
	ResetThroughMonster(): void;
	/** 重置穿过玩家状态 */
	ResetThroughHuman(): void;
	/** 重置穿过NPC状态 */
	ResetThroughNPC(): void;
	/** 重置穿过守卫状态 */
	ResetThroughGuard(): void;
	/** 设置最大掉落生命值 */
	SetMaxDropHp(Value: number): void;
	/** 获取最大掉落生命值 */
	GetMaxDropHp(): number;
	/** 最大掉落生命值 */
	MaxDropHp: number;
	/** 刷新特征 */
	RefFeature(): void;
	/** 刷新使用物品 */
	RefUseItem(): void;
	/** 获取自定义效果 */
	GetCustomEffect(index: number): number;
	/** 设置自定义效果 */
	SetCustomEffect(index: number, Value: number): void;
	/** 获取游戏货币数量 */
	GetGameMoney(MoneyType: number): number;
	/** 游戏货币数量 */
	GameMoney: number;
	/** 设置游戏货币数量 */
	SetGameMoney(MoneyType: number, Value: number, Log: string): void;
	/** 检查是否可以增加游戏货币 */
	CanAddGameMoney(MoneyType: number, Value: number): boolean;
	/** 检查是否可以减少游戏货币 */
	CanTakeGameMoney(MoneyType: number, Value: number): boolean;
	/** 增加游戏货币 */
	AddGameMoney(MoneyType: number, Value: number, Log: string): boolean;
	/** 减少游戏货币 */
	TakeGameMoney(MoneyType: number, Value: number, Log: string): boolean;
	/** 获取称号效果 */
	GetTitleEffect(): number;
	/** 称号效果 */
	TitleEffect: number;
	/** 设置称号效果 */
	SetTitleEffect(Value: number): void;
	/** 检查是否为友好目标 */
	IsFriendlyTarget(Target: TActor): boolean;
	/** 检查是否为友好目标（旧版） */
	IsFrindlyTarget(Target: TActor): boolean;
	/** 检查是否为攻击目标 */
	IsAttackTarget(Target: TActor): boolean;
	/** 添加能力buff */
	AddAbilityBuff(GroupID: number, AbilityType: number, DuraMs: number, AblityValue: number, ValueIsRate: boolean): TBuff;
	/** 添加状态buff */
	AddStatusBuff: (GroupID: number, StatusType: TBuffStatusType, DuraMs: number, Args1: number, Args2: number) => TBuff;
	/** 添加间隔buff */
	AddIntervalBuff(GroupID: number, IntervalType: number, DuraMs: number, Interval: number, Args1: number, Args2: number): TBuff;
	/** 设置buff图标 */
	SetBuffIcon(BuffHandle: number, ImageFileName: string, ImageIndex: number, HoverImageIndex: number, ShowMessage: string, DisappearMessage: string, HintMessage: string, FlashOnDisappear: boolean, ShowTimeStr: boolean): void;
	/** 删除buff */
	DeleteBuff(BuffHandle: number): boolean;
	/** 按组ID删除buff */
	DeleteBuffByGroupID(Min: number, Max: number): number;
	/** 按标签删除buff */
	DeleteBuffByTag(Tag: number): number;
	/** 获取buff数量 */
	GetBuffCount(): number;
	/** buff数量（只读） */
	readonly BuffCount: number;
	/** 获取指定索引的buff */
	GetBuffByIndex(Index: number): TBuff;
	/** 指定索引的buff（只读） */
	readonly BuffByIndex: TBuff;
	/** 按ID添加buff */
	AddBuffByID(ID: number, GroupID: number): TBuff;
	/** 按名称添加buff */
	AddBuffByName(BuffName: string, GroupID: number): TBuff;
	/** 获取是否禁止自动恢复生命值 */
	GetDenyAutoAddHP(): boolean;
	/** 是否禁止自动恢复生命值 */
	DenyAutoAddHP: boolean;
	/** 设置是否禁止自动恢复生命值 */
	SetDenyAutoAddHP(Value: boolean): void;
	/** 获取是否禁止自动恢复魔法值 */
	GetDenyAutoAddMP(): boolean;
	/** 是否禁止自动恢复魔法值 */
	DenyAutoAddMP: boolean;
	/** 设置是否禁止自动恢复魔法值 */
	SetDenyAutoAddMP(Value: boolean): void;
	/** 获取句柄 */
	GetHandle(): number;
	/** 句柄（只读） */
	readonly Handle: number;
	/** 获取哈希码 */
	GetHashCode(): number;
	/** 哈希码（只读） */
	readonly HashCode: number;
	/** 显示伤害数字（调试用） */
	ShowBleedNumberForDebug(ImgFile: string, NumImgIndex: number, Prefix: string, BleedNumber: number, Suffix: string, DuraTime: number, StartX: number, StartY: number, StopX: number, StopY: number): void;
	/** 显示伤害数字 */
	ShowBleedNumber: (TemplateID: number, BleedNumber: number, DelayMS?: number) => void;
	/** 获取附加能力 */
	GetAddedAbility(): TAddedAbility;
	/** 附加能力（只读） */
	readonly AddedAbility: TAddedAbility;
	/** 获取是否触发AI NPC执行 */
	GetTriggerAINpcExecute(): boolean;
	/** 是否触发AI NPC执行 */
	TriggerAINpcExecute: boolean;
	/** 设置是否触发AI NPC执行 */
	SetTriggerAINpcExecute(Value: boolean): void;
	/** 获取是否触发选择魔法前攻击 */
	GetTriggerSelectMagicBeforeAttack(): boolean;
	/** 是否触发选择魔法前攻击 */
	TriggerSelectMagicBeforeAttack: boolean;
	/** 设置是否触发选择魔法前攻击 */
	SetTriggerSelectMagicBeforeAttack(Value: boolean): void;
	/** 叛变 */
	Mutiny(): void;
	/** 闪现移动 */
	FlashMove(X: number, Y: number, IgnorActor: boolean): boolean;
	/** 闪现推动 */
	FlashPush(Direction: number, MaxStep: number, IgnorActor: boolean): boolean;
	/** 显示效果（扩展） */
	ShowEffectEx: (EffectID: number, OffsetX?: number, OffsetY?: number, OthersCanSee?: boolean, LoopCount?: number, ClearIfDead?: boolean) => void;
	/** 显示效果（扩展2） */
	ShowEffectEx2: (EffectID: number, OffsetX?: number, OffsetY?: number, OthersCanSee?: boolean, LoopCount?: number, ClearIfDead?: boolean) => void;
	/** 获取是否触发复活事件 */
	GetTriggerRevivalEvent(): boolean;
	/** 是否触发复活事件 */
	TriggerRevivalEvent: boolean;
	/** 设置是否触发复活事件 */
	SetTriggerRevivalEvent(Value: boolean): void;
	/** 获取是否触发死亡事件 */
	GetTriggerDieEvent(): boolean;
	/** 是否触发死亡事件 */
	TriggerDieEvent: boolean;
	/** 设置是否触发死亡事件 */
	SetTriggerDieEvent(Value: boolean): void;
	/** 获取是否触发击杀事件 */
	GetTriggerKillerEvent(): boolean;
	/** 是否触发击杀事件 */
	TriggerKillerEvent: boolean;
	/** 设置是否触发击杀事件 */
	SetTriggerKillerEvent(Value: boolean): void;
	/** 获取是否触发伤害事件 */
	GetTriggerDamageEvent(): boolean;
	/** 是否触发伤害事件 */
	TriggerDamageEvent: boolean;
	/** 设置是否触发伤害事件 */
	SetTriggerDamageEvent(Value: boolean): void;
	/** 获取跑步间隔 */
	GetRunInterval(): number;
	/** 跑步间隔 */
	RunInterval: number;
	/** 设置跑步间隔 */
	SetRunInterval(RunInterval: number): void;
	/** 获取是否在被攻击时混乱 */
	GetConfuseBitTimeBeAttacked(): boolean;
	/** 是否在被攻击时混乱 */
	ConfuseBitTimeBeAttacked: boolean;
	/** 设置是否在被攻击时混乱 */
	SetConfuseBitTimeBeAttacked(ConfuseBitTimeBeAttacked: boolean): void;
	/** 获取攻击范围 */
	GetAttackRange(): number;
	/** 攻击范围 */
	AttackRange: number;
	/** 设置攻击范围 */
	SetAttackRange(Value: number): void;
	/** 获取最后使用的魔法ID */
	GetLastUseMagicID(): number;
	/** 最后使用的魔法ID（只读） */
	readonly LastUseMagicID: number;
	/** 获取最后使用的魔法等级 */
	GetLastUseMagicLevel(): number;
	/** 最后使用的魔法等级（只读） */
	readonly LastUseMagicLevel: number;
	/** 获取视野范围 */
	GetViewRange(): number;
	/** 视野范围 */
	ViewRange: number;
	/** 设置视野范围 */
	SetViewRange(Value: number): void;
	/** 移动到指定坐标（带范围） */
	MissionToXY(X: number, Y: number, Range: number): boolean;
	/** 飞行效果 */
	FlyEffect: (Target: TActor, SkillEffectID: number, Speed: number, FlyOverEffect?: number) => void;
	/** 播放8方向效果 */
	PlayDir8Effect: (SkillEffectID: number, Dir?: number) => void;
	/** 无目标飞行效果 */
	FlyEffectNoTarget(MapX: number, MapY: number, SkillEffectID: number, Speed: number, FlyOverEffect: number): void;
	/** 延迟移动到指定位置（毫秒） */
	DelayGotoMS(ID: number, AIntervalMS: number, AChangeMapDelete: boolean, Once: boolean): boolean;
	/** 延迟移动到指定位置 */
	DelayGoto(ID: number, AIntervalTime: number, AChangeMapDelete: boolean, Once: boolean): boolean;
	/** 清除延迟移动 */
	ClearDelayGoto(ID: number): void;
	/** 检查是否有延迟移动 */
	HasDelayGoto(ID: number): boolean;
	/** 延迟调用方法 */
	DelayCallMethod(AMethod: string, AIntervalTime: number, AChangeMapDelete: boolean): void;
	/** 删除延迟调用方法 */
	DeleteDelayCallMethod(AMethod: string): void;
	/** 设置HUD生命值字符串 */
	SetHudHPStr(HudHPStr: string): void;

}
/** 玩家对象类，继承自TActor */
/**
 * 玩家对象类
 * 继承自TActor，代表游戏中的玩家角色
 * 包含玩家特有的属性和方法，如账号信息、货币系统、邮件系统等
 */
declare class TPlayObject extends TActor {
	/**
	 * 获取玩家回城地图名称
	 * @returns 回城地图名称
	 * @description 获取玩家设置的回城地图名称
	 */
	GetHomeMapName(): string;
	/** 玩家回城地图名称 */
	readonly HomeMapName: string;

	/**
	 * 获取玩家回城X坐标
	 * @returns 回城X坐标
	 * @description 获取玩家设置的回城X坐标
	 */
	GetHomeX(): number;
	/** 玩家回城X坐标 */
	readonly HomeX: number;

	/**
	 * 获取玩家回城Y坐标
	 * @returns 回城Y坐标
	 * @description 获取玩家设置的回城Y坐标
	 */
	GetHomeY(): number;
	/** 玩家回城Y坐标 */
	readonly HomeY: number;

	/**
	 * 发送自定义消息给玩家
	 * @param AMessageToken 消息令牌
	 * @param AParam1 参数1
	 * @param AParam2 参数2
	 * @param AParam3 参数3
	 * @param AData 数据字符串
	 * @description 向玩家客户端发送自定义消息
	 */
	SendCustomMessage(AMessageToken: number, AParam1: number, AParam2: number, AParam3: number, AData: string): void;

	/**
	 * 发送行会消息
	 * @param Msg 消息内容
	 * @description 向玩家所在行会的所有成员发送消息
	 */
	SendGuildMessage(Msg: string): void;

	/**
	 * 发送顶部消息
	 * @param Message 消息内容
	 * @param Mode 显示模式
	 * @description 在玩家客户端顶部显示消息
	 */
	SendTopMessage(Message: string, Mode: number): void;

	/**
	 * 发送中央消息
	 * @param Message 消息内容
	 * @param Mode 显示模式
	 * @param Time 显示时间（可选）
	 * @description 在玩家客户端中央显示消息
	 */
	SendCenterMessage: (Message: string, Mode: number, Time?: number) => void;

	/**
	 * 发送倒计时消息
	 * @param Message 消息内容
	 * @param Mode 显示模式
	 * @param Falg 标志（可选）
	 * @param ChangMapDelete 换地图删除（可选）
	 * @description 向玩家发送倒计时消息
	 */
	SendCountDownMessage: (Message: string, Mode: number, Falg?: number, ChangMapDelete?: boolean) => void;

	/**
	 * 删除倒计时消息
	 * @param Falg 标志
	 * @description 删除指定标志的倒计时消息
	 */
	DeleteCountDownMessage(Falg: number): void;

	/**
	 * 打开URL链接
	 * @param AUrl URL地址
	 * @param Width 窗口宽度
	 * @param Height 窗口高度
	 * @description 在玩家客户端打开指定的URL链接
	 */
	OpenURL(AUrl: string, Width: number, Height: number): void;

	/**
	 * 请求URL
	 * @param AUrl URL地址
	 * @description 向指定URL发送请求
	 */
	RequestURL(AUrl: string): void;
	/**
	 * 获取账号
	 * @returns 玩家账号
	 * @description 获取玩家的登录账号
	 */
	GetAccount(): string;
	/** 玩家账号 */
	readonly Account: string;

	/**
	 * 获取是否为新角色
	 * @returns true表示是新创建的角色
	 * @description 检查角色是否为新创建的角色
	 */
	GetIsNewHuman(): boolean;
	/** 是否为新角色 */
	readonly IsNewHuman: boolean;

	/**
	 * 获取登录时间
	 * @returns 登录时间戳
	 * @description 获取玩家本次登录的时间戳
	 */
	GetLoginTime(): number;
	/** 登录时间 */
	readonly LoginTime: number;

	/**
	 * 获取会话ID
	 * @returns 会话ID
	 * @description 获取玩家当前的会话标识符
	 */
	GetSessionID(): number;
	/** 会话ID */
	readonly SessionID: number;
	/** 获取配偶名称 */
	GetDearName(): string;
	/** 配偶名称 */
	DearName: string;
	/** 设置配偶名称 */
	SetDearName(Name: string): void;
	/** 调用NPC方法 */
	CallMethod(Npc: TActor, Method: string): void;
	/** 获取是否已婚 */
	GetMarried(): boolean;
	/** 是否已婚 */
	readonly Married: boolean;
	/** 获取师父名称 */
	GetMasterName(): string;
	/** 师父名称 */
	MasterName: string;
	/** 设置师父名称 */
	SetMasterName(Name: string): void;
	/** 获取是否为师 */
	GetISMaster(): boolean;
	/** 是否为师 */
	readonly ISMaster: boolean;
	/** 获取结婚次数 */
	GetMarryCount(): number;
	/** 结婚次数 */
	readonly MarryCount: number;
	/** 获取转生等级 */
	GetReNewLevel(): number;
	/** 转生等级 */
	ReNewLevel: number;
	/** 设置转生等级 */
	SetReNewLevel(Value: number): void;
	/** 获取属性点 */
	GetBonusPoint(): number;
	/** 属性点 */
	BonusPoint: number;
	/** 设置属性点 */
	SetBonusPoint(Value: number): void;
	/** 获取会员类型 */
	GetMemberType(): number;
	/** 会员类型 */
	MemberType: number;
	/** 设置会员类型 */
	SetMemberType(Value: number): void;
	/** 获取会员等级 */
	GetMemberLevel(): number;
	/** 会员等级 */
	MemberLevel: number;
	/** 设置会员等级 */
	SetMemberLevel(Value: number): void;
	/**
	 * 获取元宝数量
	 * @returns 元宝数量
	 * @description 获取玩家当前拥有的元宝数量
	 */
	GetGameGold(): number;
	/** 元宝数量 */
	GameGold: number;
	/**
	 * 设置元宝数量
	 * @param Value 元宝数量
	 * @description 设置玩家的元宝数量
	 */
	SetGameGold(Value: number): void;

	/**
	 * 获取泡点值
	 * @returns 泡点值
	 * @description 获取玩家当前的泡点值
	 */
	GetPaoDianPoint(): number;
	/** 泡点值 */
	PaoDianPoint: number;
	/**
	 * 设置泡点值
	 * @param Value 泡点值
	 * @description 设置玩家的泡点值
	 */
	SetPaoDianPoint(Value: number): void;

	/**
	 * 获取游戏点
	 * @returns 游戏点数量
	 * @description 获取玩家当前拥有的游戏点数量
	 */
	GetGamePoint(): number;
	/** 游戏点 */
	GamePoint: number;
	/**
	 * 设置游戏点
	 * @param Value 游戏点数量
	 * @description 设置玩家的游戏点数量
	 */
	SetGamePoint(Value: number): void;

	/**
	 * 获取荣耀点
	 * @returns 荣耀点数量
	 * @description 获取玩家当前拥有的荣耀点数量
	 */
	GetGameGlory(): number;
	/** 荣耀点 */
	GameGlory: number;
	/**
	 * 设置荣耀点
	 * @param Value 荣耀点数量
	 * @description 设置玩家的荣耀点数量
	 */
	SetGameGlory(Value: number): void;

	/**
	 * 获取金刚石
	 * @returns 金刚石数量
	 * @description 获取玩家当前拥有的金刚石数量
	 */
	GetGameDiaMond(): number;
	/** 金刚石 */
	GameDiaMond: number;
	/**
	 * 设置金刚石
	 * @param Value 金刚石数量
	 * @description 设置玩家的金刚石数量
	 */
	SetGameDiaMond(Value: number): void;

	/**
	 * 获取灵符
	 * @returns 灵符数量
	 * @description 获取玩家当前拥有的灵符数量
	 */
	GetGameGird(): number;
	/** 灵符 */
	GameGird: number;
	/**
	 * 设置灵符
	 * @param Value 灵符数量
	 * @description 设置玩家的灵符数量
	 */
	SetGameGird(Value: number): void;
	/** 获取自定义物品数量 */
	GetCustomItemCount(): number;
	/** 自定义物品数量 */
	readonly CustomItemCount: number;
	/** 获取自定义物品 */
	GetCustomItem(Index: number): TUserItem;
	/** 显示特效 */
	ShowEffect(EffectID: number): void;
	/** 检查文本列表 */
	CheckTextList(ATextFile: string, AText: string): boolean;
	/** 检查名称列表 */
	CheckNameList(ATextFile: string): boolean;
	/** 检查账号列表 */
	CheckAccountList(ATextFile: string): boolean;
	/** 清空列表 */
	ClearList(ATextFile: string): void;
	/** 添加文本到列表 */
	AddTextList(ATextFile: string, AText: string): void;
	/** 添加名称到列表 */
	AddNameList(ATextFile: string): void;
	/** 添加账号到列表 */
	AddAccountList(ATextFile: string): void;
	/** 添加行会到列表 */
	AddGuildList(ATextFile: string): void;
	/** 添加IP到列表 */
	AddIPList(ATextFile: string): void;
	/** 从列表删除文本 */
	DelTextList(ATextFile: string, AText: string): void;
	/** 从列表删除名称 */
	DelNameList(ATextFile: string): void;
	/** 从列表删除行会 */
	DelGuildList(ATextFile: string): void;
	/** 从列表删除账号 */
	DelAccountList(ATextFile: string): void;
	/** 从列表删除IP */
	DelIPList(ATextFile: string): void;
	/** 地图传送 */
	MapMove(MapName: string, MapX: number, MapY: number): void;
	/** 地图传送(扩展) */
	MapMoveEx(Envir: TEnvirnoment, MapX: number, MapY: number): void;
	/** 强制地图传送 */
	ForceMapMove(Envir: TEnvirnoment, MapX: number, MapY: number): void;
	/** 重置属性点 */
	RestBonusPoint(): void;
	/** 扣除城堡金币 */
	TakeCastGold(AGold: number): void;
	/** 自动获取经验 */
	AutoGetExp(AMap: string, ATime: number, APoint: number, IsSafeZone: boolean): void;
	/** 停止自动获取经验 */
	StopAutoGetExp(): void;
	/** 离线挂机 */
	OffLinePlay(AIntervalTime: number, AExpPoint: number): void;
	/** 踢出离线 */
	KickOffLine(): void;
	/** 播放音效 */
	PlaySound(ASoundFile: string): void;
	/** 播放视频 */
	PlayVideo(AVideoFile: string): void;
	/**
	 * 召唤怪物到指定位置
	 * @param AMonName 怪物名称
	 * @param MonLvl 怪物等级（可选）
	 * @param RoyaltySec 忠诚度秒数（可选）
	 * @param X X坐标（可选，默认为当前位置）
	 * @param Y Y坐标（可选，默认为当前位置）
	 * @returns 返回召唤的怪物对象
	 * @description 在指定位置召唤一个怪物，可以设置怪物等级和忠诚度
	 * @example Player.Recallmob("鸡", 1, 300, 100, 100)
	 */
	Recallmob: (AMonName: string, MonLvl?: number, RoyaltySec?: number, X?: number, Y?: number) => TActor;
	/** 组队传送(扩展) */
	GroupMoveEx(Envir: TEnvirnoment, MapX: number, MapY: number, boForce: boolean): void;
	/** 组队地图传送 */
	GroupMapMove(MapName: string, MapX: number, MapY: number): void;
	/** 行会传送(扩展) */
	GuildMapMoveEx(Envir: TEnvirnoment, MapX: number, MapY: number): void;
	/** 行会地图传送 */
	GuildMapMove(MapName: string, MapX: number, MapY: number): void;
	/** 随机传送 */
	RandomMove: (MapName?: string) => void;
	/** 随机传送(扩展) */
	RandomMoveEx(AEnvir: TEnvirnoment): void;
	/** 获取信用点 */
	GetCreditPoint(): number;
	/** 信用点 */
	CreditPoint: number;
	/** 设置信用点 */
	SetCreditPoint(Value: number): void;
	/** 开始自动增加元宝 */
	StartAutoAddGameGold(APoint: number, AInterval: number): void;
	/** 停止自动增加元宝 */
	StopAutoAddGameGold(): void;
	/** 开始自动减少元宝 */
	StartAutoSubGameGold(APoint: number, AInterval: number): void;
	/** 停止自动减少元宝 */
	StopAutoSubGameGold(): void;
	/** 改变转生等级 */
	ChangeReNewLevel(Value: number, NewLevel: number, BounsuPoint: number): void;
	/** 踢出玩家 */
	Kick(): void;
	/** 复活玩家 */
	ReAlive(): void;
	/** 更新物品 */
	UpdateItem(Item: TUserItem): void;
	/** 删除物品 */
	DeleteItem: (Item: TUserItem, Count?: number) => void;
	/** 删除背包物品 */
	DeleteBagItem(Item: TUserItem, Count: number): number;
	/** 更新技能等级经验 */
	UpdateMagicLvExp(Magic: TUserMagic): void;
	/** 更新技能 */
	UpdateMagic(Magic: TUserMagic): void;
	/** 设置技能冷却时间 */
	SetMagicCDTime(MagicId: number, CDTime: number): void;
	/** 获取登录时间戳 */
	GetLogonTick(): number;
	/** 登录时间戳 */
	readonly LogonTick: number;
	/** 获取IP地址 */
	GetIPAddress(): string;
	/** IP地址 */
	readonly IPAddress: string;
	/** 获取本地IP */
	GetIPLocal(): string;
	/** 本地IP */
	readonly IPLocal: string;
	/**
	 * 获取时间召回状态
	 * @returns 返回是否启用了时间召回
	 * @description 检查玩家是否设置了时间召回功能
	 */
	GetTimeRecall(): boolean;
	/**
	 * 时间召回状态属性
	 * @description 玩家的时间召回状态，true表示已启用
	 */
	TimeRecall: boolean;
	/** 获取支付金额 */
	GetPayMent(): number;
	/** 支付金额 */
	readonly PayMent: number;
	/** 获取组队队长 */
	GetGroupOwner(): TPlayObject;
	/** 组队队长 */
	readonly GroupOwner: TPlayObject;
	/** 获取组队人数 */
	GetGroupCount(): number;
	/** 组队人数 */
	readonly GroupCount: number;
	/** 获取组队成员 */
	GetGroupMember(Index: number): TPlayObject;
	/** 获取是否组队队长 */
	GetISGroupMaster(): boolean;
	/** 是否组队队长 */
	readonly ISGroupMaster: boolean;
	/** 加入组队 */
	JoinGroup(APlayer: TPlayObject, ShowDialog: boolean): void;
	/** 离开组队 */
	LeaveGroup(): void;
	/** 获取等级名称 */
	GetRankLevelName(): string;
	/** 等级名称 */
	RankLevelName: string;
	/** 设置等级名称 */
	SetRankLevelName(Value: string): void;
	/** 获取称号名称 */
	GetTitleName(): string;
	/** 称号名称 */
	TitleName: string;
	/** 设置称号名称 */
	SetTitleName(Value: string): void;
	/** 获取是否显示等级名称 */
	GetShowRankLevelName(): boolean;
	/** 是否显示等级名称 */
	ShowRankLevelName: boolean;
	/** 设置是否显示等级名称 */
	SetShowRankLevelName(Value: boolean): void;
	/** 更新名称 */
	UpdateName(): void;
	/** 获取贡献值 */
	GetContribution(): number;
	/** 贡献值 */
	Contribution: number;
	/** 设置贡献值 */
	SetContribution(Value: number): void;
	/** 获取锁定状态 */
	GetLocked(): boolean;
	/** 锁定状态 */
	Locked: boolean;
	/** 设置锁定状态 */
	SetLocked(Value: boolean): void;
	/** 获取摆摊状态 */
	GetStallState(): number;
	/** 摆摊状态 */
	readonly StallState: number;
	/**
	 * 设置时间召回
	 * @param Value 是否启用时间召回
	 * @param Minutes 召回时间（分钟）
	 * @description 设置玩家的时间召回功能，到时间后自动回到设置位置
	 * @example Player.SetTimeRecall(true, 30) // 30分钟后自动回城
	 */
	SetTimeRecall(Value: boolean, Minutes: number): void;
	/**
	 * 设置时间召回（扩展版本）
	 * @param AMap 目标地图名称
	 * @param Minutes 召回时间（分钟）
	 * @param MapX 目标X坐标
	 * @param MapY 目标Y坐标
	 * @description 设置玩家到指定时间后传送到指定地图的指定坐标
	 * @example Player.SetTimeRecallEx("比奇城", 30, 330, 330)
	 */
	SetTimeRecallEx(AMap: string, Minutes: number, MapX: number, MapY: number): void;
	/** 获取属性值 */
	GetProperties(): number;
	/** 属性值 */
	readonly Properties: number;
	/** 获取特征值 */
	GetFeature(): number;
	/** 特征值 */
	readonly Feature: number;
	/** 获取扩展特征值 */
	GetFeatureEx(): number;
	/** 扩展特征值 */
	readonly FeatureEx: number;
	/** 获取仓库密码 */
	GetStoragePwd(): string;
	/** 仓库密码 */
	StoragePwd: string;
	/** 设置仓库密码 */
	SetStoragePwd(Value: string): void;
	/** 获取是否允许交易 */
	GetAllowDeal(): boolean;
	/** 是否允许交易 */
	AllowDeal: boolean;
	/** 设置是否允许交易 */
	SetAllowDeal(Value: boolean): void;
	/** 获取是否允许行会 */
	GetAllowGuild(): boolean;
	/** 是否允许行会 */
	AllowGuild: boolean;
	/** 设置是否允许行会 */
	SetAllowGuild(Value: boolean): void;
	/** 获取是否允许组队 */
	GetAllowGroup(): boolean;
	/** 是否允许组队 */
	AllowGroup: boolean;
	/** 设置是否允许组队 */
	SetAllowGroup(Value: boolean): void;
	/**
	 * 获取是否允许组队召回
	 * @returns 返回是否允许队友召回此玩家
	 * @description 检查玩家是否允许被队友召回
	 */
	GetAllowGroupReCall(): boolean;
	/**
	 * 是否允许组队召回属性
	 * @description 玩家是否允许被队友召回的状态
	 */
	AllowGroupReCall: boolean;
	/**
	 * 设置是否允许组队召回
	 * @param Value true表示允许，false表示不允许
	 * @description 设置玩家是否允许被队友召回
	 * @example Player.SetAllowGroupReCall(true)
	 */
	SetAllowGroupReCall(Value: boolean): void;
	/**
	 * 获取是否允许行会召回
	 * @returns 返回是否允许行会成员召回此玩家
	 * @description 检查玩家是否允许被行会成员召回
	 */
	GetAllowGuildReCall(): boolean;
	/**
	 * 是否允许行会召回属性
	 * @description 玩家是否允许被行会成员召回的状态
	 */
	AllowGuildReCall: boolean;
	/**
	 * 设置是否允许行会召回
	 * @param Value true表示允许，false表示不允许
	 * @description 设置玩家是否允许被行会成员召回
	 * @example Player.SetAllowGuildReCall(false)
	 */
	SetAllowGuildReCall(Value: boolean): void;
	/** 获取是否允许复活 */
	GetAllowReAlive(): boolean;
	/** 是否允许复活 */
	AllowReAlive: boolean;
	/** 设置是否允许复活 */
	SetAllowReAlive(Value: boolean): void;
	/** 获取是否显示时装 */
	GetShowFashion(): boolean;
	/** 是否显示时装 */
	ShowFashion: boolean;
	/** 设置是否显示时装 */
	SetShowFashion(Value: boolean): void;
	/** 获取怪物掉落物品 */
	GetMonDropItems(MonName: string): void;
	/** 添加扩展按钮 */
	AddExtendButton: (Name: string, Hint: string, Command: string, ImageIndex: number, X?: number, Y?: number) => void;
	/** 添加顶部扩展按钮 */
	AddTopExtendButton(Name: string, Hint: string, Command: string, ImageIndex: number, X: number, Y: number): void;
	/** 移除扩展按钮 */
	RemoveExtendButton(Name: string): void;
	/** 打开市场 */
	OpenMarket(): void;
	/** 打开背包 */
	OpenBag(): void;
	/** 重新加载背包 */
	ReloadBag(): void;
	/** 打开商店 */
	OpenShop(): void;
	/** 打开邮箱 */
	OpenMailBox(): void;
	/** 打开地图视图 */
	OpenMapView(): void;
	/** 打开精炼箱 */
	OpenRefineBox(): void;
	/** 显示图标 */
	ShowSighIcon(MethodID: number, Hint: string): void;
	/** 显示图标(扩展) */
	ShowSighIcon1(Method: string, Hint: string): void;
	/** 给予物品 */
	Give: (ItemName: string, Count?: number, Upgrade?: boolean) => void;
	/** 给予物品并返回物品对象 */
	GiveItem: (ItemName: string, Upgrade?: boolean) => TUserItem;
	/** 通过索引给予物品 */
	GiveItemByIndex: (ItemIndex: number, Upgrade?: boolean) => TUserItem;
	/** 发送消息 */
	Say(Msg: string): void;
	/** 发送扩展消息 */
	SayEx(UIName: string, Msg: string): void;
	/** 更新消息 */
	UpdateSay(UIName: string, Msg: string): void;
	/** 关闭窗口 */
	CloseWindow(UIName: string): void;
	/** 关闭所有窗口 */
	CloseAllWindow(): void;
	/** 显示消息框 */
	MessageBox(Msg: string): void;
	/** 显示问题框 */
	Question(Msg: string, YMethod: string, NMethod: string): void;
	/** 打开宝箱 */
	OpenBox(BoxID: number): void;
	/** 打开宝箱(扩展) */
	OpenBoxEx(Shape: number, BoxID: number): void;
	/** 打开洗牌 */
	OpenShuffle(BoxID: number): void;
	/** 显示进度条 */
	ShowProgress(Caption: string, ATime: number, EventID: number, ActCancel: boolean): boolean;
	/** 显示进度条(扩展) */
	ShowProgressEx(Caption: string, ATime: number, NPC: TNormNpc, SucessFunction: string, FailFunction: string, ActCancel: boolean): boolean;
	/** 关闭进度条 */
	CloseProgress(): void;
	/** 获取是否允许发送消息 */
	GetAllowSendMessage(): boolean;
	/** 是否允许发送消息 */
	AllowSendMessage: boolean;
	/** 设置是否允许发送消息 */
	SetAllowSendMessage(Value: boolean): void;
	/** 获取邮件数量 */
	GetMailCount(): number;
	/** 邮件数量 */
	readonly MailCount: number;
	/** 获取未读邮件数量 */
	GetMailUnreadCount(): number;
	/** 未读邮件数量 */
	readonly MailUnreadCount: number;
	/** 检查物品灵魂升级 */
	CheckItemSoulLevelUp(AItem: TUserItem): void;
	/** 获取仓库物品数量 */
	GetStorageItemsCount(): number;
	/** 仓库物品数量 */
	readonly StorageItemsCount: number;
	/** 获取仓库物品 */
	GetStorageItem(Index: number): TUserItem;
	/** 添加物品到仓库 */
	AddItemToStorage(AItem: TUserItem): boolean;
	/** 删除仓库物品(通过索引) */
	DeleteStorageItem1(Index: number): boolean;
	/** 删除仓库物品(通过物品) */
	DeleteStorageItem2(AItem: TUserItem): boolean;
	/** 取回仓库物品 */
	TakebackStorageItem(Index: number): boolean;
	/** 获取大仓库物品数量 */
	GetBigStorageItemsCount(): number;
	/** 大仓库物品数量 */
	readonly BigStorageItemsCount: number;
	/** 获取大仓库物品 */
	GetBigStorageItem(Index: number): TUserItem;
	/** 添加物品到大仓库 */
	AddItemToBigStorage(AItem: TUserItem): boolean;
	/** 删除大仓库物品(通过索引) */
	DeleteBigStorageItem1(Index: number): boolean;
	/** 删除大仓库物品(通过物品) */
	DeleteBigStorageItem2(AItem: TUserItem): boolean;
	/** 取回大仓库物品 */
	TakebackBigStorageItem(Index: number): boolean;
	/** 获取机器码 */
	GetMachineCode(): string;
	/** 机器码 */
	readonly MachineCode: string;
	/** 添加称号 */
	AddTitle(ATitle: string): boolean;
	/** 移除称号 */
	RemoveTitle(ATitle: string): boolean;
	/** 设置当前称号 */
	SetActiveTitle(ATitle: string): void;
	/** 获取称号数量 */
	GetTitleCount(): number;
	/** 称号数量 */
	readonly TitleCount: number;
	/** 获取称号物品 */
	GetTitleItems(AIndex: number): THumTitle;
	/** 称号物品 */
	readonly TitleItems: THumTitle;
	/** 获取当前称号 */
	GetActiveTitle(): THumTitle;
	/** 当前称号 */
	ActiveTitle: THumTitle;
	/** 闪烁窗口 */
	FlashWindow(): void;
	/** 获取任务列表 */
	GetMissions(): TMissions;
	/** 任务列表 */
	readonly Missions: TMissions;
	/** 锁定移动物品 */
	LockMoveItem(): void;
	/** 解锁移动物品 */
	UnLockMoveItem(): void;
	/** 锁定移动物品(带时间) */
	LockMoveItem1(ATime: number): void;
	/** 掷骰子 */
	PlayDice: (ATag: number, APoint1: number, APoint2: number, APoint3: number, AutoCloseTime?: number) => void;
	/** 添加侧边栏按钮 */
	AddSidebarButton(ACaption: string, AName: string): void;
	/** 删除侧边栏按钮 */
	DeleteSidebarButton(AName: string): void;
	/** 清空侧边栏按钮 */
	ClearSidebarButton(): void;
	/** 设置聊天文本 */
	SetChatText(AValue: string): void;
	/** 获取功能状态 */
	GetFunctionState: (ff: TFunctionFlag) => boolean;
	/** 设置功能状态 */
	SetFunctionState: (ff: TFunctionFlag, boState: boolean) => void;
	/** 发送控件可见性 */
	SendControlVisible(Name: string, Visible: boolean, Auto: boolean): void;
	/** 获取总经验倍率 */
	GetTotalExpRate(): number;
	/** 总经验倍率 */
	readonly TotalExpRate: number;
	/** 获取总物品倍率 */
	GetTotalItemRate(): number;
	/** 总物品倍率 */
	readonly TotalItemRate: number;
	/** 获取总金币倍率 */
	GetTotalGoldRate(): number;
	/** 总金币倍率 */
	readonly TotalGoldRate: number;
	/** 锁定客户端 */
	LockClient(Caption: string, CallBack: string): void;
	/** 解锁客户端 */
	UnLockClient(): void;
	/** 设置聊天颜色 */
	SetChatColor(Color: number): void;
	/** 获取聊天颜色 */
	GetChatColor(): number;
	/** 聊天颜色 */
	ChatColor: number;
	/** 设置最大经验值 */
	setMaxExp(Value: number): void;
	/** UI引导 */
	UIGuide(UIName: string, Hint: string, GuideIdent: string): void;
	/** 移动物品到UI容器 */
	MoveItemToUIContainer(UniTag: number, Item: TUserItem, Count: number): void;
	/** 从UI容器移除物品 */
	RemoveItemFromUIContainer(UniTag: number): void;
	/** 获取晋升标志 */
	GetPromotionFlag(): string;
	/** 晋升标志 */
	readonly PromotionFlag: string;
	/** 获取字符串变量 */
	GetSVar(index: number): string;
	/** 设置字符串变量 */
	SetSVar(Index: number, Value: string): void;
	/** 获取数值变量 */
	GetNVar(index: number): number;
	/** 设置数值变量 */
	SetNVar(Index: number, Value: number): void;
	/** 获取点变量 */
	GetPVar(index: number): number;
	/** 设置点变量 */
	SetPVar(Index: number, Value: number): void;
	/** 获取字符串变量值 */
	VarString(AVarName: string): TVarValue;
	/** 获取整数变量值 */
	VarInteger(AVarName: string): TVarValue;
	/** 获取日期时间变量值 */
	VarDateTime(AVarName: string): TVarValue;
	/** 获取浮点数变量值 */
	VarFloat(AVarName: string): TVarValue;
	/** 获取布尔变量值 */
	VarBoolean(AVarName: string): TVarValue;
	/** 清空变量表 */
	ClearVarTable(): void;
	/** 移除变量 */
	RemoveVar(AName: string): void;
	/** 回城 */
	GoHome(): void;
	/**
	 * 召回玩家到当前位置
	 * @param AHumName 要召回的玩家名称
	 * @description 将指定名称的玩家传送到当前NPC或玩家的位置
	 * @example Player.RecallHuman("玩家名称")
	 */
	RecallHuman(AHumName: string): void;
	/** 设置客户端UI属性 */
	SetClientUIProperty(UIName: string, UIProperty: string): void;
	/** 加载UI */
	LoadUI(UI: string): void;
	/** 获取玩家ID */
	GetPlayerID(): number;
	/** 玩家ID */
	readonly PlayerID: number;
	/** 获取自定义保存字符串 */
	GetCustomSaveStr(): string;
	/** 自定义保存字符串 */
	CustomSaveStr: string;
	/** 设置自定义保存字符串 */
	SetCustomSaveStr(Value: string): void;
	/** 开始自动战斗 */
	StartAutoFight(): void;
	/** 停止自动战斗 */
	StopAutoFight(): void;
	/** 更新助手配置 */
	UpdateAssistantIni(IniText: string): void;
	/** 更新物品容器可见性 */
	UpdateItemContainerVisable(UniTags: string, Visable: boolean): void;
	/** 发送调试伤害数字 */
	SendBeedNumberForDebug(BleedActor: TActor, ImgFile: string, NumImgIndex: number, Prefix: string, BleedNumber: number, Suffix: string, DuraTime: number, StartX: number, StartY: number, StopX: number, StopY: number): void;
	/** 发送伤害数字 */
	SendBleedNumber: (BleedActor: TActor, TemplateID: number, BleedNumber: number, DelayMS?: number) => void
	/** 更新UI编辑文本 */
	UpdateUIEditText(UniTag: number, Text: string): void;
	/** 获取服务器入口标志 */
	GetServerEntryFlag(): string;
	/** 服务器入口标志 */
	readonly ServerEntryFlag: string;
	/** 检查机器人是否运行 */
	HasRobotRun(Name: string): boolean;
	/** 获取客户端屏幕宽度 */
	GetClientScreenWidth(): number;
	/** 客户端屏幕宽度 */
	readonly ClientScreenWidth: number;
	/** 获取客户端屏幕高度 */
	GetClientScreenHeight(): number;
	/** 客户端屏幕高度 */
	readonly ClientScreenHeight: number;
	/** 获取是否离线加经验 */
	GetNotOnlineAddExp(): boolean;
	/** 是否离线加经验 */
	readonly NotOnlineAddExp: boolean;
	/** 获取站岗时间 */
	GetStationTime(): number;
	/** 站岗时间 */
	readonly StationTime: number;
	/** 获取站岗时间戳 */
	GetStationTick(): number;
	/** 站岗时间戳 */
	readonly StationTick: number;
	/** 更新技能开启状态 */
	UpdateMagicOpenState(Magic: TUserMagic): void;
	/** 获取物品过滤显示名称 */
	GetItemFliterShowName(Idx: number): boolean;
	/** 物品过滤显示名称 */
	ItemFliterShowName: boolean;
	/** 设置物品过滤显示名称 */
	SetItemFliterShowName(Idx: number, Value: boolean): void;
	/** 获取物品过滤自动拾取 */
	GetItemFliterAutoPickUp(Idx: number): boolean;
	/** 物品过滤自动拾取 */
	ItemFliterAutoPickUp: boolean;
	/** 设置物品过滤自动拾取 */
	SetItemFliterAutoPickUp(Idx: number, Value: boolean): void;
	/** 获取物品过滤特殊显示 */
	GetItemFliterSpecialShow(Idx: number): boolean;
	/** 物品过滤特殊显示 */
	ItemFliterSpecialShow: boolean;
	/** 设置物品过滤特殊显示 */
	SetItemFliterSpecialShow(Idx: number, Value: boolean): void;
	/** 更新物品过滤 */
	UpdateItemFliter(): void;
	/** 获取是否H5客户端 */
	GetIsH5Client(): boolean;
	/** 是否H5客户端 */
	readonly IsH5Client: boolean;
	/** 设置客户端技能使用时间 */
	SetClientMagicUseTime(Magic: TUserMagic, Value: number): void;
	/** 设置客户端技能偏移使用时间 */
	SetClientMagicOffsetUseTime(Magic: TUserMagic, Value: number): void;
	/** 查询客户端快捷栏物品数量 */
	QueryClientQuickBarItemCount(Ident: string): void;
	/** 变量存储 */
	V: any;
	/** 读写变量存储数据库 */
	R: any;
	/** 读写变量下线清除 */

}

/**
 * 普通NPC类
 * 继承自TActor，代表游戏中的非玩家角色(NPC)
 * 包含NPC特有的功能，如对话、给予物品、执行脚本等
 */
declare class TNormNpc extends TActor {
	/**
	 * 关闭与玩家的对话框
	 * @param PlayObject 玩家对象
	 * @description 关闭NPC与指定玩家的对话界面
	 */
	CloseDialog(PlayObject: TPlayObject): void;

	/**
	 * 向玩家发送普通对话消息
	 * @param PlayObject 玩家对象
	 * @param Msg 消息内容
	 * @description 向玩家发送NPC对话消息
	 * @example Npc.Say(Player, "欢迎来到比奇城！")
	 */
	Say(PlayObject: TPlayObject, Msg: string): void;

	/**
	 * 向玩家发送带UI名称的扩展对话消息
	 * @param PlayObject 玩家对象
	 * @param UIName UI界面名称
	 * @param Msg 消息内容
	 * @description 向玩家发送带有特定UI界面的扩展对话消息
	 * @example Npc.SayEx(Player, "商店", "请选择您要购买的物品")
	 */
	SayEx(PlayObject: TPlayObject, UIName: string, Msg: string): void;

	/**
	 * 更新玩家的对话消息
	 * @param PlayObject 玩家对象
	 * @param UIName UI界面名称
	 * @param Msg 新的消息内容
	 * @description 更新玩家当前对话界面的消息内容
	 */
	UpdateSay(PlayObject: TPlayObject, UIName: string, Msg: string): void;

	/**
	 * 向玩家显示消息框
	 * @param PlayObject 玩家对象
	 * @param Msg 消息内容
	 * @description 向玩家显示一个简单的消息提示框
	 */
	MessageBox(PlayObject: TPlayObject, Msg: string): void;

	/**
	 * 向移动端玩家发送带UI名称的扩展对话消息
	 * @param PlayObject 玩家对象
	 * @param UIName UI界面名称
	 * @param Text 文本内容
	 * @param Scale 缩放比例
	 * @param boCenter 是否居中显示（可选）
	 * @description 专门为移动端客户端优化的扩展对话消息
	 */
	SayExMobile: (PlayObject: TPlayObject, UIName: string, Text: string, Scale: number, boCenter?: boolean) => void;

	/**
	 * 向玩家显示带确认和取消选项的问题框
	 * @param PlayObject 玩家对象
	 * @param Msg 问题内容
	 * @param YMethod 确认时执行的方法名
	 * @param NMethod 取消时执行的方法名
	 * @description 向玩家显示一个带有确认和取消按钮的问题对话框
	 * @example Npc.Question(Player, "确定要购买这件装备吗？", "BuyItem", "Cancel")
	 */
	Question(PlayObject: TPlayObject, Msg: string, YMethod: string, NMethod: string): void;
	/**
	 * 给予玩家指定物品
	 * @param Actor 角色对象
	 * @param ItemName 物品名称
	 * @param Count 物品数量（可选，默认为1）
	 * @param Upgrade 是否升级物品（可选，默认为false）
	 * @description 给予指定角色指定名称和数量的物品
	 * @example Npc.Give(Player, "金创药", 10, false)
	 */
	Give: (Actor: TActor, ItemName: string, Count?: number, Upgrade?: boolean) => void;

	/**
	 * 给予玩家指定物品并返回物品对象
	 * @param Actor 角色对象
	 * @param ItemName 物品名称
	 * @param Upgrade 是否升级物品（可选，默认为false）
	 * @returns 创建的物品对象
	 * @description 给予指定角色物品并返回物品对象，用于后续操作
	 * @example const item = Npc.GiveItem(Player, "屠龙刀", true)
	 */
	GiveItem: (Actor: TActor, ItemName: string, Upgrade?: boolean) => TUserItem;

	/**
	 * 通过物品索引给予玩家物品并返回物品对象
	 * @param Actor 角色对象
	 * @param ItemIndex 物品索引ID
	 * @param Upgrade 是否升级物品
	 * @returns 创建的物品对象
	 * @description 通过物品数据库索引给予角色物品
	 */
	GiveItemByIndex(Actor: TActor, ItemIndex: number, Upgrade: boolean): TUserItem;

	/**
	 * 从玩家身上拿走指定物品
	 * @param Actor 角色对象
	 * @param ItemName 物品名称
	 * @param Count 拿走数量（可选，默认为1）
	 * @description 从指定角色背包中拿走指定名称和数量的物品
	 * @example Npc.Take(Player, "金币", 1000)
	 */
	Take: (Actor: TActor, ItemName: string, Count?: number) => void;

	/**
	 * 从玩家身上拿走指定物品对象
	 * @param Actor 角色对象
	 * @param Item 物品对象
	 * @returns 是否成功拿走
	 * @description 从指定角色背包中拿走特定的物品对象
	 */
	TakeItem(Actor: TActor, Item: TUserItem): boolean;

	/**
	 * 修复玩家指定位置的装备
	 * @param Actor 角色对象
	 * @param ItemWhere 装备位置
	 * @description 修复角色指定装备位置的装备耐久度
	 */
	RepairActorItem(Actor: TActor, ItemWhere: number): void;

	/**
	 * 修复玩家所有装备
	 * @param Actor 角色对象
	 * @description 修复角色身上所有装备的耐久度
	 */
	RepairActorAllItem(Actor: TActor): void;
	/** 设置NPC的雕像状态 */
	SetEffigyState(Job: number, Properties: number, Feature: number, FeatureEx: number, Offset: number): void;
	/** 获取NPC的标签值 */
	GetTag(): number;
	/** NPC的标签值 */
	readonly Tag: number;
	/** 获取NPC的等级名称 */
	GetRankLevelName(): string;
	/** NPC的等级名称 */
	RankLevelName: string;
	/** 设置NPC的等级名称 */
	SetRankLevelName(Value: string): void;
}
/** 行会类 */
/**
 * 行会类
 * 代表游戏中的行会组织
 * 包含行会的基本信息、成员管理、建设点数等功能
 */
declare class TGuild {
	/** 获取行会名称 */
	GetName(): string;
	/** 行会名称 */
	readonly Name: string;
	/** 获取行会ID */
	GetGuildID(): number;
	/** 行会ID */
	readonly GuildID: number;
	/** 获取行会会长名称 */
	GetChiefName(): string;
	/** 行会会长名称 */
	readonly ChiefName: string;
	/** 获取行会竞赛点数 */
	GetContestPoint(): number;
	/** 行会竞赛点数 */
	ContestPoint: number;
	/** 设置行会竞赛点数 */
	SetContestPoint(Value: number): void;
	/** 获取行会是否参与团队战斗 */
	GetTeamFight(): boolean;
	/** 行会是否参与团队战斗 */
	readonly TeamFight: boolean;
	/** 获取行会最大成员数限制 */
	GetMemberMaxLimit(): number;
	/** 行会最大成员数限制 */
	MemberMaxLimit: number;
	/** 设置行会最大成员数限制 */
	SetMemberMaxLimit(Value: number): void;
	/** 获取行会当前成员数量 */
	GetMemberCount(): number;
	/** 行会当前成员数量 */
	readonly MemberCount: number;
	/** 获取行会总数量 */
	GetCount(): number;
	/** 行会总数量 */
	readonly Count: number;
	/** 检查行会是否已满员 */
	IsFull(): boolean;
	/** 获取行会建设点数 */
	GetBuildPoint(): number;
	/** 行会建设点数 */
	BuildPoint: number;
	/** 设置行会建设点数 */
	SetBuildPoint(Value: number): void;
	/** 获取行会灵气值 */
	GetAurae(): number;
	/** 行会灵气值 */
	Aurae: number;
	/** 设置行会灵气值 */
	SetAurae(Value: number): void;
	/** 获取行会稳定度 */
	GetStability(): number;
	/** 行会稳定度 */
	Stability: number;
	/** 设置行会稳定度 */
	SetStability(Value: number): void;
	/** 获取行会繁荣度 */
	GetFlourishing(): number;
	/** 行会繁荣度 */
	Flourishing: number;
	/** 设置行会繁荣度 */
	SetFlourishing(Value: number): void;
	/** 获取行会喷泉是否开启 */
	GetFountainOpen(): boolean;
	/** 行会喷泉是否开启 */
	FountainOpen: boolean;
	/** 设置行会喷泉开启状态 */
	SetFountainOpen(Value: boolean): void;
	/** 添加行会职位名称 */
	AddRankName(ARankNo: number, ARankName: string): boolean;
	/** 更新行会职位名称 */
	UpdateRankName(AOldName: string, ANewName: string): boolean;
	/** 删除行会职位名称 */
	DropRankName(ARankName: string): boolean;
	/** 添加指定职位的行会成员 */
	AddMemberWithRank(ARankName: string, APlayName: string): boolean;
	/** 添加行会成员 */
	AddMember(APlayName: string): boolean;
	/** 删除行会成员 */
	DeleteMember(APlayName: string): boolean;
	/** 更换行会会长 */
	ChangeChief(APlayName: string): boolean;
	/** 添加行会盟友(通过名称) */
	AddAlly0(AGuildName: string): boolean;
	/** 添加行会盟友(通过行会对象) */
	AddAlly1(AAllyGuild: TGuild): boolean;
	/** 删除行会盟友(通过名称) */
	DeleteAlly0(AGuildName: string): boolean;
	/** 删除行会盟友(通过行会对象) */
	DeleteAlly1(AAllyGuild: TGuild): boolean;
	/** 获取行会字符串变量 */
	VarString(AVarName: string): TVarValue;
	/** 获取行会整数变量 */
	VarInteger(AVarName: string): TVarValue;
	/** 获取行会日期时间变量 */
	VarDateTime(AVarName: string): TVarValue;
	/** 获取行会浮点数变量 */
	VarFloat(AVarName: string): TVarValue;
	/** 获取行会布尔变量 */
	VarBoolean(AVarName: string): TVarValue;
	/** 获取所有行会职位名称列表 */
	GetRankNames(AList: TStringList): void;
	/** 获取指定职位的所有成员列表 */
	GetRankMembers(ARankName: string, AList: TStringList): void;
	/** 获取行会自定义保存字符串 */
	GetCustomSaveStr(): string;
	/** 行会自定义保存字符串 */
	CustomSaveStr: string;
	/** 设置行会自定义保存字符串 */
	SetCustomSaveStr(Value: string): void;
	/** 行会变量存储 */
	V: any;
	/** 行会只读变量存储 */
	R: any;
}
//城堡对象
/**
 * 用户城堡类
 * 代表游戏中的城堡系统
 * 包含城堡的地图、行会归属、攻城战等功能
 */
declare class TUserCastle {
	/** 获取城堡地图环境 */
	GetMapCastle(): TEnvirnoment;
	/** 城堡地图环境 */
	readonly MapCastle: TEnvirnoment;
	/** 获取宫殿地图环境 */
	GetMapPalace(): TEnvirnoment;
	/** 宫殿地图环境 */
	readonly MapPalace: TEnvirnoment;
	/** 获取密室地图环境 */
	GetMapSecret(): TEnvirnoment;
	/** 密室地图环境 */
	readonly MapSecret: TEnvirnoment;
	/** 获取城堡名称 */
	GetName(): string;
	/** 城堡名称 */
	Name: string;
	/** 设置城堡名称 */
	SetName(Value: string): void;
	/** 获取城堡总金币 */
	GetTotalGold(): number;
	/** 城堡总金币 */
	TotalGold: number;
	/** 设置城堡总金币 */
	SetTotalGold(Value: number): void;
	/** 获取今日收入 */
	GetTodayIncome(): number;
	/** 今日收入 */
	TodayIncome: number;
	/** 设置今日收入 */
	SetTodayIncome(Value: number): void;
	/** 获取所属行会 */
	GetGuild(): TGuild;
	/** 所属行会 */
	Guild: TGuild;
	/** 设置所属行会 */
	SetGuild(AGuild: TGuild): void;
	/** 获取城堡所在地图 */
	GetHomeMap(): string;
	/** 城堡所在地图 */
	readonly HomeMap: string;
	/** 获取城堡X坐标 */
	GetHomeX(): number;
	/** 城堡X坐标 */
	readonly HomeX: number;
	/** 获取城堡Y坐标 */
	GetHomeY(): number;
	/** 城堡Y坐标 */
	readonly HomeY: number;
	/** 获取战争日期 */
	GetWarDate(): number;
	/** 战争日期 */
	readonly WarDate: number;
	/** 获取是否处于战争中 */
	GetUnderWar(): boolean;
	/** 是否处于战争中 */
	readonly UnderWar: boolean;
	/** 检查指定坐标是否在城堡战争区域内 */
	InCastleWarArea(Envir: TEnvirnoment, nX: number, nY: number): boolean;
	/** 检查指定角色是否为城堡成员 */
	IsMember(Cert: TActor): boolean;
	/** 检查指定行会是否为城堡主人行会 */
	IsMasterGuild(Guild: TGuild): boolean;
	/** 检查指定行会是否为攻击方行会 */
	IsAttackGuild(Guild: TGuild): boolean;
	/** 检查指定行会是否为攻击方盟友行会 */
	IsAttackAllyGuild(Guild: TGuild): boolean;
	/** 检查指定行会是否为防守方行会 */
	IsDefenseGuild(Guild: TGuild): boolean;
	/** 检查指定行会是否为防守方盟友行会 */
	IsDefenseAllyGuild(Guild: TGuild): boolean;
	/** 启动城墙防御 */
	StartWall(): void;
	/** 停止城墙防御 */
	StopWall(): void;
	/** 添加攻击方行会 */
	AddAttacker(Guild: TGuild): boolean;
	/** 添加带时间限制的攻击方行会 */
	AddAttackerByTime(Guild: TGuild, ATime: number): boolean;
	/** 添加所有攻击方行会 */
	AddAllAttacker(): void;
	/** 添加带时间限制的所有攻击方行会 */
	AddAllAttackerByTime(ATime: number): void;
	/** 修复城门 */
	RepairDoor(): boolean;
	/** 获取左侧城墙 */
	GetLeftWall(): TActor;
	/** 左侧城墙 */
	readonly LeftWall: TActor;
	/** 获取中央城墙 */
	GetCenterWall(): TActor;
	/** 中央城墙 */
	readonly CenterWall: TActor;
	/** 获取右侧城墙 */
	GetRightWall(): TActor;
	/** 右侧城墙 */
	readonly RightWall: TActor;
	/** 修复指定索引的城墙 */
	RepairWall(nWallIndex: number): boolean;
	/** 获取城门是否开启 */
	GetMainDoorOpened(): boolean;
	/** 城门是否开启 */
	readonly MainDoorOpened: boolean;
	/** 获取城门对象 */
	GetMainDoor(): TActor;
	/** 城门对象 */
	readonly MainDoor: TActor;
	/** 开启城门 */
	OpenDoor(): void;
	/** 关闭城门 */
	CloseDoor(): void;
	/** 雇佣弓箭手 */
	HireArcher(Index: number): boolean;
	/** 雇佣守卫 */
	HireGuard(Index: number): boolean;
	/** 解雇弓箭手 */
	UnHireArcher(Index: number): boolean;
	/** 解雇守卫 */
	UnHireGuard(Index: number): boolean;
	/** 获取指定索引的守卫 */
	GetGuard(Index: number): TActor;
	/** 获取指定索引的弓箭手 */
	GetArcher(Index: number): TActor;
	/** 获取攻击战争数量 */
	GetAttackWarCount(): number;
	/** 攻击战争数量 */
	readonly AttackWarCount: number;
	/** 获取指定索引的攻击战争日期 */
	GetAttackWarDate(Index: number): number;
	/** 获取指定索引的攻击战争行会 */
	GetAttackWarGuild(Index: number): TGuild;
	/** 获取攻击行会数量 */
	GetAttackGuildCount(): number;
	/** 攻击行会数量 */
	readonly AttackGuildCount: number;
	/** 获取指定索引的攻击行会 */
	GetAttackGuild(Index: number): TGuild;
	/** 获取变更日期时间 */
	GetChangeDateTime(): number;
	/** 变更日期时间 */
	readonly ChangeDateTime: number;
	/** 获取战争开始时间戳 */
	GetStartWarTick(): number;
	/** 战争开始时间戳 */
	readonly StartWarTick: number;
	/** 获取战争结束时间戳 */
	GetStopWarTick(): number;
	/** 战争结束时间戳 */
	readonly StopWarTick: number;
}
/** 标准物品类 */
declare class TStdItem {
	/** 获取物品名称 */
	GetName(): string;
	/** 物品名称 */
	readonly Name: string;
	/** 获取物品索引 */
	GetIndex(): number;
	/** 物品索引 */
	readonly Index: number;
	/** 获取物品标准模式 */
	GetStdMode(): number;
	/** 物品标准模式 */
	readonly StdMode: number;
	/** 获取物品形状 */
	GetShape(): number;
	/** 物品形状 */
	readonly Shape: number;
	/** 获取物品重量 */
	GetWeight(): number;
	/** 物品重量 */
	readonly Weight: number;
	/** 获取数据库AniCount属性 */
	GetAniCount(): number;
	/** 物品动画计数 */
	readonly AniCount: number;
	/** 获取物品数据库Source属性 */
	GetSource(): number;
	/** Source属性 */
	readonly Source: number;
	/** 获取物品数据库Reserved属性 */
	GetReserved(): number;
	/** Reserved属性 */
	readonly Reserved: number;
	/** 获取物品外观 */
	GetLooks(): number;
	/** 物品外观 */
	readonly Looks: number;
	/** 获取最大耐久度 */
	GetDuraMax(): number;
	/** 最大耐久度 */
	readonly DuraMax: number;
	/** 获取物理防御下限 */
	GetAC(): number;
	/** 物理防御下限 */
	readonly AC: number;
	/** 获取物理防御上限 */
	GetAC2(): number;
	/** 物理防御上限 */
	readonly AC2: number;
	/** 获取魔法防御下限 */
	GetMAC(): number;
	/** 魔法防御下限 */
	readonly MAC: number;
	/** 获取魔法防御上限 */
	GetMAC2(): number;
	/** 魔法防御上限 */
	readonly MAC2: number;
	/** 获取物理攻击下限 */
	GetDC(): number;
	/** 物理攻击下限 */
	readonly DC: number;
	/** 获取物理攻击上限 */
	GetDC2(): number;
	/** 物理攻击上限 */
	readonly DC2: number;
	/** 获取魔法攻击下限 */
	GetMC(): number;
	/** 魔法攻击下限 */
	readonly MC: number;
	/** 获取魔法攻击上限 */
	GetMC2(): number;
	/** 魔法攻击上限 */
	readonly MC2: number;
	/** 获取道术攻击下限 */
	GetSC(): number;
	/** 道术攻击下限 */
	readonly SC: number;
	/** 获取道术攻击上限 */
	GetSC2(): number;
	/** 道术攻击上限 */
	readonly SC2: number;
	/** 获取弓箭手攻击下限 */
	GetTC(): number;
	/** 弓箭手攻击下限 */
	readonly TC: number;
	/** 获取弓箭手攻击上限 */
	GetTC2(): number;
	/** 弓箭手攻击上限 */
	readonly TC2: number;
	/** 获取刺术攻击下限 */
	GetPC(): number;
	/** 刺术攻击下限 */
	readonly PC: number;
	/** 获取刺术攻击上限 */
	GetPC2(): number;
	/** 刺术攻击上限 */
	readonly PC2: number;
	/** 获取武术攻击下限 */
	GetWC(): number;
	/** 武术攻击下限 */
	readonly WC: number;
	/** 获取武器攻击上限 */
	GetWC2(): number;
	/** 武术攻击上限 */
	readonly WC2: number;
	/** 获取物品穿戴类别设定 */
	GetNeed(): number;
	/** 穿戴类别 */
	readonly Need: number;
	/** 获取穿戴需求等级 */
	GetNeedLevel(): number;
	/** 需求穿戴等级 */
	readonly NeedLevel: number;
	/** 获取物品价格 */
	GetPrice(): number;
	/** 物品价格 */
	readonly Price: number;
	/** 获取职业要求 */
	GetJob(): number;
	/** 职业要求 */
	readonly Job: number;
	/** 获取物品颜色 */
	GetColor(): number;
	/** 物品颜色 */
	readonly Color: number;
	/** 获取物品类型ID */
	GetTypeID(): number;
	/** 物品类型ID */
	readonly TypeID: number;
}
/**
 * 用户物品类
 * 代表游戏中的物品实例
 * 包含物品的属性、强化、升级、绑定等功能
 */
declare class TUserItem {
	/**
	 * 获取物品名称
	 * @returns 物品名称
	 * @description 获取物品的基础名称
	 */
	GetName(): string;
	/** 物品名称 */
	readonly Name: string;

	/**
	 * 获取物品显示名称
	 * @returns 显示名称
	 * @description 获取物品在游戏中显示的名称（可能包含强化等级等信息）
	 */
	GetDisplayName(): string;
	/** 物品显示名称 */
	readonly DisplayName: string;

	/**
	 * 重命名物品
	 * @param NewName 新名称
	 * @returns 是否重命名成功
	 * @description 为物品设置自定义名称
	 */
	Rename(NewName: string): boolean;

	/**
	 * 恢复物品原始名称
	 * @returns 是否恢复成功
	 * @description 将物品名称恢复为原始名称
	 */
	RevertName(): boolean;

	/**
	 * 获取物品颜色
	 * @returns 颜色值
	 * @description 获取物品的颜色属性
	 */
	GetColor(): number;
	/** 物品颜色 */
	Color: number;
	/**
	 * 设置物品颜色
	 * @param Value 颜色值
	 * @description 设置物品的颜色属性
	 */
	SetColor(Value: number): void;

	/**
	 * 获取物品品质
	 * @returns 品质等级
	 * @description 获取物品的品质等级（普通、优秀、精良等）
	 */
	GetQuality(): number;
	/** 物品品质 */
	Quality: number;
	/**
	 * 设置物品品质
	 * @param Value 品质等级
	 * @description 设置物品的品质等级
	 */
	SetQuality(Value: number): void;

	/**
	 * 打孔
	 * @returns 是否打孔成功
	 * @description 为物品打孔，用于镶嵌宝石
	 */
	MakeHole(): boolean;

	/**
	 * 开启灵魂
	 * @returns 是否开启成功
	 * @description 开启物品的灵魂属性
	 */
	OpenSoul(): boolean;
	/** 从源物品复制属性 */
	CopyFrom(Source: TUserItem): boolean;
	/** 从源物品复制属性(不改变制造索引) */
	CopyFromNotChangeMakeIndex(Source: TUserItem): boolean;
	/** 获取物品标准模式 */
	GetStdMode(): number;
	/** 物品标准模式 */
	readonly StdMode: number;
	/** 获取穿戴类别 */
	GetNeed(): number;
	/** 穿戴类别 */
	Need: number;
	/** 设置穿戴类别 */
	SetNeed(Value: number): void;
	/** 获取需求等级 */
	GetNeedLevel(): number;
	/** 需求等级 */
	NeedLevel: number;
	/** 设置需求等级 */
	SetNeedLevel(Value: number): void;
	/** 获取物品价格 */
	GetPrice(): number;
	/** 物品价格 */
	readonly Price: number;
	/** 获取物品价格2 */
	GetPrice2(): number;
	/** 物品价格2 */
	readonly Price2: number;
	/** 获取物品形状 */
	GetShape(): number;
	/** 物品形状 */
	Shape: number;
	/** 设置物品形状 */
	SetShape(Value: number): void;
	/** 获取物品外观 */
	GetLook(): number;
	/** 物品外观 */
	Look: number;
	/** 设置物品外观 */
	SetLook(Value: number): void;
	/** 获取物品动画计数 */
	GetAniCount(): number;
	/** 物品动画计数 */
	AniCount: number;
	/** 设置物品动画计数 */
	SetAniCount(Value: number): void;
	/** 获取物品来源 */
	GetSource(): number;
	/** 物品来源 */
	readonly Source: number;
	/** 获取职业要求 */
	GetJob(): number;
	/** 职业要求 */
	readonly Job: number;
	/** 获取制造索引 */
	GetMakeIndex(): number;
	/** 制造索引 */
	readonly MakeIndex: number;
	/** 获取制造索引低部分 */
	GetMakeIndexLowPart(): number;
	/** 制造索引低部分 */
	readonly MakeIndexLowPart: number;
	/** 获取制造索引高部分 */
	GetMakeIndexHighPart(): number;
	/** 制造索引高部分 */
	readonly MakeIndexHighPart: number;
	/** 获取制造索引字符串 */
	GetMakeIndexString(): string;
	/** 制造索引字符串 */
	readonly MakeIndexString: string;
	/** 获取物品唯一标识 */
	GetUUID(): string;
	/** 物品唯一标识 */
	readonly UUID: string;
	/** 获取物品索引 */
	GetItemIndex(): number;
	/** 物品索引 */
	readonly ItemIndex: number;
	/** 获取当前耐久度 */
	GetDura(): number;
	/** 当前耐久度 */
	Dura: number;
	/** 设置当前耐久度 */
	SetDura(Value: number): void;
	/** 获取最大耐久度 */
	GetDuraMax(): number;
	/** 最大耐久度 */
	DuraMax: number;
	/** 设置最大耐久度 */
	SetDuraMax(Value: number): void;
	/** 获取最大日期 */
	GetMaxDate(): number;
	/** 最大日期 */
	MaxDate: number;
	/** 设置最大日期 */
	SetMaxDate(Value: number): void;
	/** 获取物理防御加成 */
	GetAddAC(): number;
	/** 物理防御加成 */
	AddAC: number;
	/** 设置物理防御加成 */
	SetAddAC(Value: number): void;
	/** 获取魔法防御加成 */
	GetAddMAC(): number;
	/** 魔法防御加成 */
	AddMAC: number;
	/** 设置魔法防御加成 */
	SetAddMAC(Value: number): void;
	/** 获取物理攻击加成 */
	GetAddDC(): number;
	/** 物理攻击加成 */
	AddDC: number;
	/** 获取物理攻击加成字符串 */
	GetAddDCStr(): string;
	/** 物理攻击加成字符串 */
	readonly AddDCStr: string;
	/** 设置物理攻击加成 */
	SetAddDC(Value: number): void;
	/** 获取魔法攻击加成 */
	GetAddMC(): number;
	/** 魔法攻击加成 */
	AddMC: number;
	/** 设置魔法攻击加成 */
	SetAddMC(Value: number): void;
	/** 获取道术攻击加成 */
	GetAddSC(): number;
	/** 道术攻击加成 */
	AddSC: number;
	/** 设置道术攻击加成 */
	SetAddSC(Value: number): void;
	/** 获取弓箭手攻击加成 */
	GetAddTC(): number;
	/** 弓箭手攻击加成 */
	AddTC: number;
	/** 设置弓箭手攻击加成 */
	SetAddTC(Value: number): void;
	/** 获取刺术攻击加成 */
	GetAddPC(): number;
	/** 刺术攻击加成 */
	AddPC: number;
	/** 设置刺术攻击加成 */
	SetAddPC(Value: number): void;
	/** 获取武术攻击加成 */
	GetAddWC(): number;
	/** 武术攻击加成 */
	AddWC: number;
	/** 设置武术攻击加成 */
	SetAddWC(Value: number): void;
	/** 获取物理防御加成(等级) */
	GetAddLAC(): number;
	/** 物理防御加成(等级) */
	AddLAC: number;
	/** 设置物理防御加成(等级) */
	SetAddLAC(Value: number): void;
	/** 获取魔法防御加成(等级) */
	GetAddLMAC(): number;
	/** 魔法防御加成(等级) */
	AddLMAC: number;
	/** 设置魔法防御加成(等级) */
	SetAddLMAC(Value: number): void;
	/** 获取物理攻击加成(等级) */
	GetAddLDC(): number;
	/** 物理攻击加成(等级) */
	AddLDC: number;
	/** 设置物理攻击加成(等级) */
	SetAddLDC(Value: number): void;
	/** 获取魔法攻击加成(等级) */
	GetAddLMC(): number;
	/** 魔法攻击加成(等级) */
	AddLMC: number;
	/** 设置魔法攻击加成(等级) */
	SetAddLMC(Value: number): void;
	/** 获取道术攻击加成(等级) */
	GetAddLSC(): number;
	/** 道术攻击加成(等级) */
	AddLSC: number;
	/** 设置道术攻击加成(等级) */
	SetAddLSC(Value: number): void;
	/** 获取弓箭手攻击加成(等级) */
	GetAddLTC(): number;
	/** 弓箭手攻击加成(等级) */
	AddLTC: number;
	/** 设置弓箭手攻击加成(等级) */
	SetAddLTC(Value: number): void;
	/** 获取刺术攻击加成(等级) */
	GetAddLPC(): number;
	/** 刺术攻击加成(等级) */
	AddLPC: number;
	/** 设置刺术攻击加成(等级) */
	SetAddLPC(Value: number): void;
	/** 获取武术攻击加成(等级) */
	GetAddLWC(): number;
	/** 武术攻击加成(等级) */
	AddLWC: number;
	/** 设置武术攻击加成(等级) */
	SetAddLWC(Value: number): void;
	/** 获取是否绑定 */
	GetBind(): boolean;
	/** 是否绑定 */
	Bind: boolean;
	/** 设置是否绑定 */
	SetBind(Value: boolean): void;
	/** 获取是否永不掉落 */
	GetNeverDrop(): boolean;
	/** 是否永不掉落 */
	NeverDrop: boolean;
	/** 设置是否永不掉落 */
	SetNeverDrop(Value: boolean): void;
	/** 获取是否不可修理 */
	GetNoRepair(): boolean;
	/** 是否不可修理 */
	NoRepair: boolean;
	/** 设置是否不可修理 */
	SetNoRepair(Value: boolean): void;
	/** 获取是否不可存储 */
	GetNoStore(): boolean;
	/** 是否不可存储 */
	NoStore: boolean;
	/** 设置是否不可存储 */
	SetNoStore(Value: boolean): void;
	/** 获取命中加成 */
	GetAddHitPoint(): number;
	/** 命中加成 */
	AddHitPoint: number;
	/** 设置命中加成 */
	SetAddHitPoint(Value: number): void;
	/** 获取攻击速度加成 */
	GetAddHitSpeed(): number;
	/** 攻击速度加成 */
	AddHitSpeed: number;
	/** 设置攻击速度加成 */
	SetAddHitSpeed(Value: number): void;
	/** 获取移动速度加成 */
	GetAddSpeedPoint(): number;
	/** 移动速度加成 */
	AddSpeedPoint: number;
	/** 设置移动速度加成 */
	SetAddSpeedPoint(Value: number): void;
	/** 获取魔法抗性加成 */
	GetAddAntiMagic(): number;
	/** 魔法抗性加成 */
	AddAntiMagic: number;
	/** 设置魔法抗性加成 */
	SetAddAntiMagic(Value: number): void;
	/** 获取毒素抗性加成 */
	GetAddAntiPoison(): number;
	/** 毒素抗性加成 */
	AddAntiPoison: number;
	/** 设置毒素抗性加成 */
	SetAddAntiPoison(Value: number): void;
	/** 获取生命恢复加成 */
	GetAddHealthRecover(): number;
	/** 生命恢复加成 */
	AddHealthRecover: number;
	/** 设置生命恢复加成 */
	SetAddHealthRecover(Value: number): void;
	/** 获取魔法恢复加成 */
	GetAddSpellRecover(): number;
	/** 魔法恢复加成 */
	AddSpellRecover: number;
	/** 设置魔法恢复加成 */
	SetAddSpellRecover(Value: number): void;
	/** 获取毒素恢复加成 */
	GetAddPoisonRecover(): number;
	/** 毒素恢复加成 */
	AddPoisonRecover: number;
	/** 设置毒素恢复加成 */
	SetAddPoisonRecover(Value: number): void;
	/** 获取幸运加成 */
	GetAddLuck(): number;
	/** 幸运加成 */
	AddLuck: number;
	/** 设置幸运加成 */
	SetAddLuck(Value: number): void;
	/** 获取升级次数 */
	GetUpgrade(): number;
	/** 升级次数 */
	Upgrade: number;
	/** 设置升级次数 */
	SetUpgrade(Value: number): void;
	/** 获取最大升级次数 */
	GetMaxUpgrade(): number;
	/** 最大升级次数 */
	MaxUpgrade: number;
	/** 设置最大升级次数 */
	SetMaxUpgrade(Value: number): void;
	/** 获取属性点 */
	GetAddPoint(Idx: number): TAddPointItem;
	/** 获取等级属性 */
	GetAddLevel(Idx: number): TAddLevelItem;
	/** 设置属性孔 */
	SetAddHold(Idx: number, Value: number): void;
	/** 设置孔数 */
	SetAddHole(Idx: number, Value: number): void;
	/** 获取属性孔 */
	GetAddHold(Idx: number): number;
	/** 获取孔数 */
	GetAddHole(Idx: number): number;
	/** 孔数 */
	AddHole: number;
	/** 获取是否开启灵魂 */
	GetOpenedSoul(): boolean;
	/** 是否开启灵魂 */
	readonly OpenedSoul: boolean;
	/** 获取灵魂等级 */
	GetSoulLevel(): number;
	/** 灵魂等级 */
	SoulLevel: number;
	/** 设置灵魂等级 */
	SetSoulLevel(Value: number): void;
	/** 获取灵魂经验 */
	GetSoulExp(): number;
	/** 灵魂经验 */
	SoulExp: number;
	/** 设置灵魂经验 */
	SetSoulExp(Value: number): void;
	/** 设置灵魂最大经验 */
	SetSoulMaxExp(Value: number): void;
	/** 获取灵魂最大经验 */
	GetSoulMaxExp(): number;
	/** 灵魂最大经验 */
	SoulMaxExp: number;
	/** 获取效果类型 */
	GetEffectType(): number;
	/** 效果类型 */
	EffectType: number;
	/** 设置效果类型 */
	SetEffectType(Value: number): void;
	/** 获取总属性值 */
	GetTotalAbility(): number;
	/** 总属性值 */
	readonly TotalAbility: number;
	/** 获取物品出路 */
	GetItemOutWay(): number;
	/** 物品出路 */
	ItemOutWay: number;
	/** 设置物品出路 */
	SetItemOutWay(Value: number): void;
	/** 生成物品字符串 */
	MakeString(): string;
	/** 生成物品字符串2 */
	MakeString2(): string;
	/** 设置获得时间 */
	SetFromDateTime(Value: number): void;
	/** 获取获得时间 */
	GetFromDateTime(): number;
	/** 获得时间 */
	FromDateTime: number;
	/** 获取自定义效果 */
	GetCustomEffect(): number;
	/** 自定义效果 */
	CustomEffect: number;
	/** 设置自定义效果 */
	SetCustomEffect(Value: number): void;
	/** 获取自定义效果2 */
	GetCustomEffect2(): number;
	/** 自定义效果2 */
	CustomEffect2: number;
	/** 设置自定义效果2 */
	SetCustomEffect2(Value: number): void;
	/** 获取自定义效果3 */
	GetCustomEffect3(): number;
	/** 自定义效果3 */
	CustomEffect3: number;
	/** 设置自定义效果3 */
	SetCustomEffect3(Value: number): void;
	/** 获取自定义标题 */
	GetCustomCaption(Index: number): string;
	/** 设置自定义标题 */
	SetCustomCaption(Index: number, Value: string): void;
	/** 获取自定义文本 */
	GetCustomText(Index: number): string;
	/** 设置自定义文本 */
	SetCustomText(Index: number, Value: string): void;
	/** 获取自定义描述 */
	GetCustomDesc(): string;
	/** 自定义描述 */
	CustomDesc: string;
	/** 设置自定义描述 */
	SetCustomDesc(Value: string): void;
	/** 获取出路1 */
	GetOutWay1(Index: number): number;
	/** 出路1 */
	OutWay1: number;
	/** 设置出路1 */
	SetOutWay1(Index: number, Value: number): void;
	/** 获取出路2 */
	GetOutWay2(Index: number): number;
	/** 出路2 */
	OutWay2: number;
	/** 设置出路2 */
	SetOutWay2(Index: number, Value: number): void;
	/** 获取出路3 */
	GetOutWay3(Index: number): number;
	/** 出路3 */
	OutWay3: number;
	/** 设置出路3 */
	SetOutWay3(Index: number, Value: number): void;
	/** 获取出路4 */
	GetOutWay4(Index: number): number;
	/** 出路4 */
	OutWay4: number;
	/** 设置出路4 */
	SetOutWay4(Index: number, Value: number): void;
	/** 获取自定义值 */
	GetCustomValue(Index: number): number;
	/** 自定义值 */
	CustomValue: number;
	/** 设置自定义值 */
	SetCustomValue(Index: number, Value: number): void;
	/** 获取掉落效果 */
	GetDropEff(): number;
	/** 掉落效果 */
	DropEff: number;
	/** 设置掉落效果 */
	SetDropEff(Value: number): void;
	/** 获取物品状态 */
	GetState(): TItemState;
	/** 物品状态 */
	readonly State: TItemState;
	/** 创建物品副本 */
	MakeCopy(): TUserItem;
	/** 获取是否开启出路4 */
	GetIsOpenOutWay4(): boolean;
	/** 是否开启出路4 */
	IsOpenOutWay4: boolean;
	/** 设置是否开启出路4 */
	SetIsOpenOutWay4(Value: boolean): void;
	/** 获取比较分数 */
	GetCompareScore(): number;
	/** 比较分数 */
	CompareScore: number;
	/** 设置比较分数 */
	SetCompareScore(Value: number): void;
}
declare class TEnvirnoment {
	/** 获取环境名称 */
	GetName(): string;
	/** 环境名称 */
	readonly Name: string;
	/** 获取地图名称 */
	GetMapName(): string;
	/** 地图名称 */
	readonly MapName: string;
	/** 获取地图ID */
	GetMapID(): string;
	/** 地图ID */
	readonly MapID: string;
	/** 获取是否为副本 */
	GetDuplicate(): boolean;
	/** 是否为副本 */
	readonly Duplicate: boolean;
	/** 获取是否黑暗 */
	GetDark(): boolean;
	/** 是否黑暗 */
	Dark: boolean;
	/** 设置是否黑暗 */
	SetDark(Value: boolean): void;
	/** 获取是否为白天 */
	GetDay(): boolean;
	/** 是否为白天 */
	Day: boolean;
	/** 设置是否为白天 */
	SetDay(Value: boolean): void;
	/** 获取是否黑暗环境 */
	GetDarkness(): boolean;
	/** 是否黑暗环境 */
	Darkness: boolean;
	/** 设置是否黑暗环境 */
	SetDarkness(Value: boolean): void;
	/** 获取是否日光环境 */
	GetDayLight(): boolean;
	/** 是否日光环境 */
	DayLight: boolean;
	/** 设置是否日光环境 */
	SetDayLight(Value: boolean): void;
	/** 获取是否安全区 */
	GetSafe(): boolean;
	/** 是否安全区 */
	Safe: boolean;
	/** 设置是否安全区 */
	SetSafe(Value: boolean): void;
	/** 获取是否战斗区 */
	GetFight(): boolean;
	/** 是否战斗区 */
	Fight: boolean;
	/** 设置是否战斗区 */
	SetFight(Value: boolean): void;
	/** 获取是否为行会战争地图 */
	GetFight3(): boolean;
	/** 是否为行会战争地图 */
	Fight3: boolean;
	/** 设置是否是否为行会战争地图 */
	SetFight3(Value: boolean): void;
	/** 获取是否问答区 */
	GetQuiz(): boolean;
	/** 是否问答区 */
	Quiz: boolean;
	/** 设置是否问答区 */
	SetQuiz(Value: boolean): void;
	/** 获取是否禁止重连 */
	GetNoReconect(): boolean;
	/** 是否禁止重连 */
	NoReconect: boolean;
	/** 设置是否禁止重连 */
	SetNoReconect(Value: boolean): void;
	/** 获取重连地图 */
	GetReConnectMap(): string;
	/** 重连地图 */
	ReConnectMap: string;
	/** 设置重连地图 */
	SetReConnectMap(Value: string): void;
	/** 获取是否播放音乐 */
	GetMUSIC(): boolean;
	/** 是否播放音乐 */
	MUSIC: boolean;
	/** 设置是否播放音乐 */
	SetMUSIC(Value: boolean): void;
	/** 获取经验倍率 */
	GetExpRate(): number;
	/** 经验倍率 */
	ExpRate: number;
	/** 设置经验倍率 */
	SetExpRate(Value: number): void;
	/** 获取PK胜利等级 */
	GetPKWinLevel(): number;
	/** PK胜利等级 */
	PKWinLevel: number;
	/** 设置PK胜利等级 */
	SetPKWinLevel(Value: number): void;
	/** 获取PK胜利经验 */
	GetPKWinExp(): number;
	/** PK胜利经验 */
	PKWinExp: number;
	/** 设置PK胜利经验 */
	SetPKWinExp(Value: number): void;
	/** 获取PK失败等级 */
	GetPKLostLevel(): number;
	/** PK失败等级 */
	PKLostLevel: number;
	/** 设置PK失败等级 */
	SetPKLostLevel(Value: number): void;
	/** 获取PK失败经验 */
	GetPKLostExp(): number;
	/** PK失败经验 */
	PKLostExp: number;
	/** 设置PK失败经验 */
	SetPKLostExp(Value: number): void;
	/** 获取减少生命值 */
	GetDecHP(): number;
	/** 减少生命值 */
	DecHP: number;
	/** 设置减少生命值 */
	SetDecHP(Value: number): void;
	/** 获取减少生命值时间间隔 */
	GetDecHPTime(): number;
	/** 减少生命值时间间隔 */
	DecHPTime: number;
	/** 设置减少生命值时间间隔 */
	SetDecHPTime(Value: number): void;
	/** 获取增加生命值 */
	GetIncHP(): number;
	/** 增加生命值 */
	IncHP: number;
	/** 设置增加生命值 */
	SetIncHP(Value: number): void;
	/** 获取增加生命值时间间隔 */
	GetIncHPTime(): number;
	/** 增加生命值时间间隔 */
	IncHPTime: number;
	/** 设置增加生命值时间间隔 */
	SetIncHPTime(Value: number): void;
	/** 获取减少元宝 */
	GetDecGameGold(): number;
	/** 减少元宝 */
	DecGameGold: number;
	/** 设置减少元宝 */
	SetDecGameGold(Value: number): void;
	/** 获取减少元宝时间间隔 */
	GetDecGameGoldTime(): number;
	/** 减少元宝时间间隔 */
	DecGameGoldTime: number;
	/** 设置减少元宝时间间隔 */
	SetDecGameGoldTime(Value: number): void;
	/** 获取减少游戏点 */
	GetDecGamePoint(): number;
	/** 减少游戏点 */
	DecGamePoint: number;
	/** 设置减少游戏点 */
	SetDecGamePoint(Value: number): void;
	/** 获取减少游戏点时间间隔 */
	GetDecGamePointTime(): number;
	/** 减少游戏点时间间隔 */
	DecGamePointTime: number;
	/** 设置减少游戏点时间间隔 */
	SetDecGamePointTime(Value: number): void;
	/** 获取增加元宝 */
	GetIncGameGold(): number;
	/** 增加元宝 */
	IncGameGold: number;
	/** 设置增加元宝 */
	SetIncGameGold(Value: number): void;
	/** 获取增加元宝时间间隔 */
	GetIncGameGoldTime(): number;
	/** 增加元宝时间间隔 */
	IncGameGoldTime: number;
	/** 设置增加元宝时间间隔 */
	SetIncGameGoldTime(Value: number): void;
	/** 获取增加游戏点 */
	GetIncGamePoint(): number;
	/** 增加游戏点 */
	IncGamePoint: number;
	/** 设置增加游戏点 */
	SetIncGamePoint(Value: number): void;
	/** 获取增加游戏点时间间隔 */
	GetIncGamePointTime(): number;
	/** 增加游戏点时间间隔 */
	IncGamePointTime: number;
	/** 设置增加游戏点时间间隔 */
	SetIncGamePointTime(Value: number): void;
	/** 获取是否允许玩家跑步 */
	GetRunHuman(): boolean;
	/** 是否允许玩家跑步 */
	RunHuman: boolean;
	/** 设置是否允许玩家跑步 */
	SetRunHuman(Value: boolean): void;
	/** 获取是否允许怪物跑步 */
	GetRunMon(): boolean;
	/** 是否允许怪物跑步 */
	RunMon: boolean;
	/** 设置是否允许怪物跑步 */
	SetRunMon(Value: boolean): void;
	/** 获取是否需要挖洞 */
	GetNeedHole(): boolean;
	/** 是否需要挖洞 */
	NeedHole: boolean;
	/** 设置是否需要挖洞 */
	SetNeedHole(Value: boolean): void;
	/** 获取是否禁止回城 */
	GetNoRecall(): boolean;
	/** 是否禁止回城 */
	NoRecall: boolean;
	/** 设置是否禁止回城 */
	SetNoRecall(Value: boolean): void;
	/** 获取是否禁止行会回城 */
	GetNoGuildRecall(): boolean;
	/** 是否禁止行会回城 */
	NoGuildRecall: boolean;
	/** 设置是否禁止行会回城 */
	SetNoGuildRecall(Value: boolean): void;
	/** 获取是否禁止夫妻回城 */
	GetNoDearRecall(): boolean;
	/** 是否禁止夫妻回城 */
	NoDearRecall: boolean;
	/** 设置是否禁止夫妻回城 */
	SetNoDearRecall(Value: boolean): void;
	/** 获取是否禁止师徒回城 */
	GetNoMasterRecall(): boolean;
	/** 是否禁止师徒回城 */
	NoMasterRecall: boolean;
	/** 设置是否禁止师徒回城 */
	SetNoMasterRecall(Value: boolean): void;
	/** 获取是否禁止随机移动 */
	GetNoRandomMove(): boolean;
	/** 是否禁止随机移动 */
	NoRandomMove: boolean;
	/** 设置是否禁止随机移动 */
	SetNoRandomMove(Value: boolean): void;
	/** 获取是否禁止使用药品 */
	GetNoDrug(): boolean;
	/** 是否禁止使用药品 */
	NoDrug: boolean;
	/** 设置是否禁止使用药品 */
	SetNoDrug(Value: boolean): void;
	/** 获取是否为矿区 */
	GetMine(): boolean;
	/** 是否为矿区 */
	Mine: boolean;
	/** 设置是否为矿区 */
	SetMine(Value: boolean): void;
	/** 获取是否禁止位置移动 */
	GetNoPostionMove(): boolean;
	/** 是否禁止位置移动 */
	NoPostionMove: boolean;
	/** 设置是否禁止位置移动 */
	SetNoPostionMove(Value: boolean): void;
	/** 获取是否允许PK */
	GetFightPK(): boolean;
	/** 是否允许PK */
	FightPK: boolean;
	/** 设置是否允许PK */
	SetFightPK(Value: boolean): void;
	/** 获取是否禁止骑马 */
	GetNoHorse(): boolean;
	/** 是否禁止骑马 */
	NoHorse: boolean;
	/** 设置是否禁止骑马 */
	SetNoHorse(Value: boolean): void;
	/** 获取怪物数量 */
	GetMonCount(): number;
	/** 怪物数量 */
	readonly MonCount: number;
	/** 获取玩家数量 */
	GetHumCount(): number;
	/** 玩家数量 */
	readonly HumCount: number;
	/** 清除怪物 */
	ClearMon(ANoDrop: boolean, AMonName: string): void;
	/** 获取指定怪物数量 */
	GetMonCountEx: (AMonName?: string) => number;
	/** 指定怪物数量 */
	readonly MonCountEx: number;
	/** 获取排除指定怪物后的数量 */
	GetMonCountExclude(ExcludeMonName: string): number;
	/** 排除指定怪物后的数量 */
	readonly MonCountExclude: number;
	/**
	 * 获取指定范围内怪物数量
	 * @param {number} MapX - 地图X坐标
	 * @param {number} MapY - 地图Y坐标
	 * @param {number} Range - 搜索范围
	 * @param {string} AMonName - 怪物名称
	 * @returns {number} 范围内怪物数量
	 */
	GetMonCountInRange(MapX: number, MapY: number, Range: number, AMonName: string): number;
	/** 范围内怪物数量 */
	readonly MonCountInRange: number;
	/**
	 * 获取指定范围内的角色列表
	 * @param {number} MapX - 地图X坐标
	 * @param {number} MapY - 地图Y坐标
	 * @param {number} Range - 搜索范围
	 * @param {string} [ActorName] - 角色名称（可选）
	 * @returns {TActorList} 范围内的角色列表
	 */
	GetActorListInRange: (MapX: number, MapY: number, Range: number, ActorName?: string) => TActorList;
	/** 范围内的角色列表 */
	readonly ActorListInRange: TActorList;
	/**
	 * 获取指定坐标的角色列表
	 * @param {number} MapX - 地图X坐标
	 * @param {number} MapY - 地图Y坐标
	 * @param {string} [ActorName] - 角色名称（可选）
	 * @returns {TActorList} 指定坐标的角色列表
	 */
	GetActorListAt: (MapX: number, MapY: number, ActorName?: string) => TActorList;
	/** 指定坐标的角色列表 */
	readonly ActorListAt: TActorList;
	/**
	 * 获取是否正在释放
	 * @returns {boolean} 是否正在释放
	 */
	GetFreeing(): boolean;
	/** 是否正在释放 */
	readonly Freeing: boolean;
	/**
	 * 获取开始时间
	 * @returns {number} 开始时间戳
	 */
	GetStartTime(): number;
	/** 开始时间戳 */
	readonly StartTime: number;
	/**
	 * 检查指定坐标是否可以移动
	 * @param {number} MapX - 地图X坐标
	 * @param {number} MapY - 地图Y坐标
	 * @param {boolean} boIgnoreActor - 是否忽略角色阻挡
	 * @returns {boolean} 是否可以移动
	 */
	CanMove(MapX: number, MapY: number, boIgnoreActor: boolean): boolean;
	/**
	 * 设置进入困难模式
	 * @param {boolean} boDenySay - 是否禁止说话
	 * @param {boolean} boDenyAutoColor - 是否禁止自动着色
	 * @param {boolean} boDenyViewUserInfo - 是否禁止查看用户信息
	 * @param {number} WeaponShape - 武器外观
	 * @param {number} DressShape - 衣服外观
	 * @param {string} SameName - 相同名称
	 */
	SetInTroubleModeActive(boDenySay: boolean, boDenyAutoColor: boolean, boDenyViewUserInfo: boolean, WeaponShape: number, DressShape: number, SameName: string): void;
	/**
	 * 关闭困难模式
	 */
	SetInTroubleModeClose(): void;
	/**
	 * 设置显示名称
	 * @param {string} S - 显示名称
	 */
	SetDisplayName(S: string): void;
	/**
	 * 获取显示名称
	 * @returns {string} 显示名称
	 */
	GetDisplayName(): string;
	/** 显示名称 */
	DisplayName: string;
	/**
	 * 获取地图宽度
	 * @returns {number} 地图宽度
	 */
	GetMapWidth(): number;
	/** 地图宽度 */
	readonly MapWidth: number;
	/**
	 * 获取地图高度
	 * @returns {number} 地图高度
	 */
	GetMapHeight(): number;
	/** 地图高度 */
	readonly MapHeight: number;
	/**
	 * 在指定范围内投掷怪物物品
	 * @param {number} MapX - 地图X坐标
	 * @param {number} MapY - 地图Y坐标
	 * @param {number} Range - 投掷范围
	 * @param {string} MonName - 怪物名称
	 * @param {TPlayObject} ItemOwner - 物品拥有者
	 * @param {number} ForbidPickUpTime - 禁止拾取时间
	 * @param {number} AppendDropRatePercent - 附加掉落率百分比
	 * @returns {number} 投掷的物品数量
	 */
	ThrowMonItems(MapX: number, MapY: number, Range: number, MonName: string, ItemOwner: TPlayObject, ForbidPickUpTime: number, AppendDropRatePercent: number): number;

}
declare class TUserMagic {
	/** 获取魔法名称 */
	GetName(): string;
	/** 魔法名称 */
	readonly Name: string;
	/** 获取魔法ID */
	GetMagID(): number;
	/** 魔法ID */
	readonly MagID: number;
	/** 获取魔法索引 */
	GetMagIdx(): number;
	/** 魔法索引 */
	readonly MagIdx: number;
	/** 获取职业要求 */
	GetJob(): number;
	/** 职业要求 */
	readonly Job: number;
	/** 获取魔法等级 */
	GetLevel(): number;
	/** 魔法等级 */
	Level: number;
	/** 设置魔法等级 */
	SetLevel(Value: number): void;
	/** 获取强化等级 */
	GetStrengthen(): number;
	/** 强化等级 */
	Strengthen: number;
	/** 设置强化等级 */
	SetStrengthen(Value: number): void;
	/** 获取修炼点数 */
	GetTranPoint(): number;
	/** 修炼点数 */
	TranPoint: number;
	/** 设置修炼点数 */
	SetTranPoint(Value: number): void;
	/** 获取技能上次使用的时间 */
	GetUseTime(): number;
	/** 时间 */
	UseTime: number;
	/** 设置技能上次使用的时间  */
	SetUseTime(Value: number): void;
	/** 获取技能释放间隔 */
	GetCDTime(): number;
	/** 冷却时间 */
	readonly CDTime: number;
	/** 获取是否开启 */
	GetOpened(): boolean;
	/** 是否开启 */
	Opened: boolean;
	/** 设置是否开启 */
	SetOpened(Value: boolean): void;
	/** 获取魔法信息 */
	GetMagicInfo(): TMagic;
	/** 魔法信息 */
	readonly MagicInfo: TMagic;
	/** 获取快捷键 */
	GetKey(): TKeyBoardCode;
	/** 快捷键 */
	Key: TKeyBoardCode;
	/** 设置快捷键 */
	SetKey(Key: TKeyBoardCode): void;
	/** 获取是否使用Ctrl键 */
	GetKeyCtrl(): boolean;
	/** 是否使用Ctrl键 */
	KeyCtrl: boolean;
	/** 设置是否使用Ctrl键 */
	SetKeyCtrl(Value: boolean): void;
	/** 获取左上角图标 */
	GetLeftTopIcon(): number;
	/** 左上角图标 */
	LeftTopIcon: number;
	/** 设置左上角图标 */
	SetLeftTopIcon(Icon: number): void;
	/** 获取右上角图标 */
	GetRightTopIcon(): number;
	/** 右上角图标 */
	RightTopIcon: number;
	/** 设置右上角图标 */
	SetRightTopIcon(Icon: number): void;
	/** 获取左下角图标 */
	GetLeftBottomIcon(): number;
	/** 左下角图标 */
	LeftBottomIcon: number;
	/** 设置左下角图标 */
	SetLeftBottomIcon(Icon: number): void;
	/** 获取右下角图标 */
	GetRightBottompIcon(): number;
	/** 右下角图标 */
	RightBottompIcon: number;
	/** 设置右下角图标 */
	SetRightBottompIcon(Icon: number): void;
	/** 设置自定义图标 */
	SetCustomIcon(Icon: number): void;
	/** 获取自定义图标 */
	GetCustomIcon(): number;
	/** 自定义图标 */
	CustomIcon: number;
}
/** Buff效果类 - 用于管理角色的增益/减益状态 */
declare class TBuff {
	/** 获取标签 */
	GetTag(): number;
	/** 标签 */
	readonly Tag: number;
	/** 获取ID */
	GetID(): number;
	/** ID */
	readonly ID: number;
	/** 获取句柄 */
	GetHandle(): number;
	/** 句柄 */
	readonly Handle: number;
	/** 获取组ID */
	GetGroupID(): number;
	/** 组ID */
	readonly GroupID: number;
	/** 获取Buff值 */
	GetBuffValue(): number;
	/** Buff值 */
	readonly BuffValue: number;
	/** 获取是否为比率值 */
	GetValueRate(): boolean;
	/** 是否为比率值 */
	readonly ValueRate: boolean;
	/** 获取销毁时间戳 */
	GetDestoryTick(): number;
	/** 销毁时间戳 */
	DestoryTick: number;
	/** 设置销毁时间戳 */
	SetDestoryTick(value: number): void;
	/** 获取影响间隔 */
	AffectInterval(): number;
	/** 获取目标角色 */
	GetActor(): TActor;
	/** 目标角色 */
	Actor: TActor;
	/** 设置目标角色 */
	SetActor(Value: TActor): void;
	/** 获取自定义整数值 */
	GetCustomInt(Index: number): number;
	/** 自定义整数值 */
	CustomInt: number;
	/** 设置自定义整数值 */
	SetCustomInt(Index: number, value: number): void;
	/** 设置自定义字符串 */
	SetCustomStr(Str: string): void;
	/** 获取自定义字符串 */
	GetCustomStr(): string;
	/** 自定义字符串 */
	CustomStr: string;
	/** 获取分类 */
	GetCategory(): number;
	/** 分类 */
	readonly Category: number;
	/** 获取Buff能力类型 */
	GetBuffAbilityType(): number;
	/** Buff能力类型 */
	readonly BuffAbilityType: number;
	/** 获取Buff状态类型 */
	GetBuffStatusType(): number;
	/** Buff状态类型 */
	readonly BuffStatusType: number;
	/** 获取Buff间隔类型 */
	GetBuffIntervalType(): number;
	/** Buff间隔类型 */
	readonly BuffIntervalType: number;
	/** 获取参数1 */
	GetArgs1(): number;
	/** 参数1 */
	readonly Args1: number;
	/** 获取参数2 */
	GetArgs2(): number;
	/** 参数2 */
	readonly Args2: number;
	/** 设置组 */
	SetGroup(value: number): void;
}
/** 称号类 - 用于管理角色的称号属性 */
declare class THumTitle {
	/** 获取索引 */
	GetIndex(): number;
	/** 索引 */
	readonly Index: number;
	/** 获取名称 */
	GetName(): string;
	/** 名称 */
	readonly Name: string;
	/** 获取外观 */
	GetLooks(): number;
	/** 外观 */
	readonly Looks: number;
	/** 获取称号ID */
	GetTitleID(): number;
	/** 称号ID */
	readonly TitleID: number;
	/** 获取生命值加成 */
	GetHP(): number;
	/** 生命值加成 */
	readonly HP: number;
	/** 获取魔法值加成 */
	GetMP(): number;
	/** 魔法值加成 */
	readonly MP: number;
	/** 获取物理防御加成 */
	GetAC(): number;
	/** 物理防御加成 */
	readonly AC: number;
	/** 获取物理防御上限加成 */
	GetACMax(): number;
	/** 物理防御上限加成 */
	readonly ACMax: number;
	/** 获取魔法防御加成 */
	GetMAC(): number;
	/** 魔法防御加成 */
	readonly MAC: number;
	/** 获取魔法防御上限加成 */
	GetMACMax(): number;
	/** 魔法防御上限加成 */
	readonly MACMax: number;
	/** 获取物理攻击加成 */
	GetDC(): number;
	/** 物理攻击加成 */
	readonly DC: number;
	/** 获取物理攻击上限加成 */
	GetDCMax(): number;
	/** 物理攻击上限加成 */
	readonly DCMax: number;
	/** 获取魔法攻击加成 */
	GetMC(): number;
	/** 魔法攻击加成 */
	readonly MC: number;
	/** 获取魔法攻击上限加成 */
	GetMCMax(): number;
	/** 魔法攻击上限加成 */
	readonly MCMax: number;
	/** 获取道术攻击加成 */
	GetSC(): number;
	/** 道术攻击加成 */
	readonly SC: number;
	/** 获取道术攻击上限加成 */
	GetSCMax(): number;
	/** 道术攻击上限加成 */
	readonly SCMax: number;
	/** 获取毒素攻击加成 */
	GetTC(): number;
	/** 毒素攻击加成 */
	readonly TC: number;
	/** 获取毒素攻击上限加成 */
	GetTCMax(): number;
	/** 毒素攻击上限加成 */
	readonly TCMax: number;
	/** 获取神圣攻击加成 */
	GetPC(): number;
	/** 神圣攻击加成 */
	readonly PC: number;
	/** 获取神圣攻击上限加成 */
	GetPCMax(): number;
	/** 神圣攻击上限加成 */
	readonly PCMax: number;
	/** 获取武器攻击加成 */
	GetWC(): number;
	/** 武器攻击加成 */
	readonly WC: number;
	/** 获取武器攻击上限加成 */
	GetWCMax(): number;
	/** 武器攻击上限加成 */
	readonly WCMax: number;
	/** 获取命中加成 */
	GetHitPoint(): number;
	/** 命中加成 */
	readonly HitPoint: number;
	/** 获取抗毒加成 */
	GetAntiPoison(): number;
	/** 抗毒加成 */
	readonly AntiPoison: number;
	/** 获取毒素恢复加成 */
	GetPoisonRecover(): number;
	/** 毒素恢复加成 */
	readonly PoisonRecover: number;
	/** 获取生命恢复加成 */
	GetHealthRecover(): number;
	/** 生命恢复加成 */
	readonly HealthRecover: number;
	/** 获取魔法恢复加成 */
	GetSpellRecover(): number;
	/** 魔法恢复加成 */
	readonly SpellRecover: number;
	/** 获取魔法抗性加成 */
	GetAntiMagic(): number;
	/** 魔法抗性加成 */
	readonly AntiMagic: number;
	/** 获取称号的限时属性 */
	GetLimit(): number;
	/** 限制 */
	Limit: number;
	/** 设置称号的限时属性 */
	SetLimit(Value: number): void;
}
/** 任务项类 - 用于管理单个任务的信息和状态 */
declare class TMissionItem {
	/** 获取记录ID */
	GetRecordID(): string;
	/** 记录ID */
	readonly RecordID: string;
	/** 获取类型 */
	GetKind(): number;
	/** 类型 */
	readonly Kind: number;
	/** 获取任务ID */
	GetMissionID(): string;
	/** 任务ID */
	readonly MissionID: string;
	/** 获取主题 */
	GetSubject(): string;
	/** 主题 */
	Subject: string;
	/** 设置主题 */
	SetSubject(AValue: string): void;
	/** 获取内容 */
	GetContent(): string;
	/** 内容 */
	Content: string;
	/** 设置内容 */
	SetContent(AValue: string): void;
	/** 获取奖励 */
	GetRewards(): string;
	/** 奖励 */
	Rewards: string;
	/** 设置奖励 */
	SetRewards(AValue: string): void;
	/** 获取需求类型 */
	GetNeedType(): number;
	/** 需求类型 */
	NeedType: number;
	/** 设置需求类型 */
	SetNeedType(AValue: number): void;
	/** 获取需求名称 */
	GetNeedName(): string;
	/** 需求名称 */
	NeedName: string;
	/** 设置需求名称 */
	SetNeedName(AValue: string): void;
	/** 获取需求品质 */
	GetNeedQuality(): number;
	/** 需求品质 */
	NeedQuality: number;
	/** 设置需求品质 */
	SetNeedQuality(AValue: number): void;
	/** 获取需求最大值 */
	GetNeedMax(): number;
	/** 需求最大值 */
	NeedMax: number;
	/** 设置需求最大值 */
	SetNeedMax(AValue: number): void;
	/** 获取需求进度 */
	GetNeedProgress(): number;
	/** 需求进度 */
	NeedProgress: number;
	/** 设置需求进度 */
	SetNeedProgress(AValue: number): void;
	/** 获取目标NPC */
	GetTargetNPC(): number;
	/** 目标NPC */
	TargetNPC: number;
	/** 设置目标NPC */
	SetTargetNPC(AValue: number): void;
	/** 获取开始时间 */
	GetStart(): number;
	/** 开始时间 */
	Start: number;
	/** 设置开始时间 */
	SetStart(AValue: number): void;
	/** 获取限制时间 */
	GetLimit(): number;
	/** 限制时间 */
	Limit: number;
	/** 设置限制时间 */
	SetLimit(AValue: number): void;
	/** 获取状态 */
	GetState(): number;
	/** 状态 */
	State: number;
	/** 设置状态 */
	SetState(AValue: number): void;
	/** 更新任务 */
	Update(): void;
	/** 提交任务 */
	Submit(): void;
	/** 取消任务 */
	Cancel(): void;
	/** 删除任务 */
	Delete(): void;
}
/** 任务系统类 */
declare class TMissions {
	/** 清空所有任务 */
	Clear(): void;
	/** 检查是否存在指定记录ID的任务 */
	Contain(ARecordID: string): boolean;
	/** 尝试获取指定记录ID的任务 */
	TryGet(ARecordID: string): TMissionItem;
	/** 检查数据库中是否存在指定任务ID */
	ContainMissionIDInDB(AMissionID: string): boolean;
	/** 检查是否存在指定任务ID */
	ContainMissionID(AMissionID: string): boolean;
	/** 尝试通过任务ID获取任务 */
	TryGetByMissionID(AMissionID: string): TMissionItem;
	/** 检查是否存在指定任务ID的链接任务 */
	ContainLink(AMissionID: string): boolean;
	/** 尝试获取指定任务ID的链接任务 */
	TryGetLink(AMissionID: string): TMissionLinkItem;
	/** 添加简单任务 */
	Add1(AKind: number, AMissionID: string, ATargetNPC: number): TMissionItem;
	/** 添加完整任务 */
	Add2(AKind: number, AMissionID: string, ANeedType: number, ASubject: string, AContent: string, ARewards: string, ANeedName: string, ANeedMax: number, ANeedQuality: number, ALimit: number, ATargetNPC: number, AAutoComplete: boolean): TMissionItem;
	/** 添加简单链接任务 */
	AddLink1(AKind: number, AMissionID: string, ATargetNPC: number): TMissionLinkItem;
	/** 添加完整链接任务 */
	AddLink2(AKind: number, AMissionID: string, ASubject: string, AContent: string, ATargetNPC: number, ANeedLevel: number, ANeedReLevel: number): TMissionLinkItem;
	/** 删除指定记录ID的任务 */
	Delete(ARecordID: string): void;
	/** 删除指定任务ID的链接任务 */
	DeleteLink(AMissionID: string): void;
	/** 刷新任务列表 */
	Refresh(): void;
	/** 获取任务数量 */
	GetCount(): number;
	/** 任务数量 */
	readonly Count: number;
	/** 获取指定索引的任务 */
	GetItems(AIndex: number): TMissionItem;
	/** 任务列表 */
	readonly Items: TMissionItem;
	/** 获取指定记录ID的任务索引 */
	IndexOf(ARecordID: string): number;
	/** 链接任务数量 */
	readonly LinkCount: number;
	/** 链接任务列表 */
	readonly LinkItems: TMissionLinkItem;
}
/**
 * 加点物品类
 * 用于管理角色属性加点相关的物品功能
 */
declare class TAddPointItem {
	/** 获取数值 */
	GetValue(): number;
	/** 数值属性 */
	Value: number;
	/** 设置数值 */
	SetValue(Value: number): void;
	/** 获取数值类型 */
	GetValueType(): number;
	/** 数值类型属性 */
	ValueType: number;
	/** 设置数值类型 */
	SetValueType(Value: number): void;

}
/**
 * 加等级物品类
 * 用于管理角色等级提升相关的物品功能
 */
declare class TAddLevelItem {
	/** 获取数值 */
	GetValue(): number;
	/** 数值属性 */
	Value: number;
	/** 设置数值 */
	SetValue(Value: number): void;
	/** 获取数值类型 */
	GetValueType(): number;
	/** 数值类型属性 */
	ValueType: number;
	/** 设置数值类型 */
	SetValueType(Value: number): void;
	/** 获取状态 */
	GetState(): number;
	/** 状态属性 */
	State: number;
	/** 设置状态 */
	SetState(Value: number): void;

}
/**
 * 附加能力类
 * 用于管理角色的附加属性能力，包括生命、魔法、攻击、防御等各种属性的加成
 */
declare class TAddedAbility {
	/** 获取生命值加成 */
	GetHP(): number;
	/** 生命值加成属性 */
	HP: number;
	/** 设置生命值加成 */
	SetHP(Value: number): void;
	/** 获取魔法值加成 */
	GetMP(): number;
	/** 魔法值加成属性 */
	MP: number;
	/** 设置魔法值加成 */
	SetMP(Value: number): void;
	/** 获取物理防御下限加成 */
	GetAC(): number;
	/** 物理防御下限加成属性 */
	AC: number;
	/** 设置物理防御下限加成 */
	SetAC(Value: number): void;
	/** 获取物理防御上限加成 */
	GetACMax(): number;
	/** 物理防御上限加成属性 */
	ACMax: number;
	/** 设置物理防御上限加成 */
	SetACMax(Value: number): void;
	/** 获取魔法防御下限加成 */
	GetMAC(): number;
	/** 魔法防御下限加成属性 */
	MAC: number;
	/** 设置魔法防御下限加成 */
	SetMAC(Value: number): void;
	/** 获取魔法防御上限加成 */
	GetMACMax(): number;
	/** 魔法防御上限加成属性 */
	MACMax: number;
	/** 设置魔法防御上限加成 */
	SetMACMax(Value: number): void;
	/** 获取物理攻击下限加成 */
	GetDC(): number;
	/** 物理攻击下限加成属性 */
	DC: number;
	/** 设置物理攻击下限加成 */
	SetDC(Value: number): void;
	/** 获取物理攻击上限加成 */
	GetDCMax(): number;
	/** 物理攻击上限加成属性 */
	DCMax: number;
	/** 设置物理攻击上限加成 */
	SetDCMax(Value: number): void;
	/** 获取魔法攻击下限加成 */
	GetMC(): number;
	/** 魔法攻击下限加成属性 */
	MC: number;
	/** 设置魔法攻击下限加成 */
	SetMC(Value: number): void;
	/** 获取魔法攻击上限加成 */
	GetMCMax(): number;
	/** 魔法攻击上限加成属性 */
	MCMax: number;
	/** 设置魔法攻击上限加成 */
	SetMCMax(Value: number): void;
	/** 获取道术攻击下限加成 */
	GetSC(): number;
	/** 道术攻击下限加成属性 */
	SC: number;
	/** 设置道术攻击下限加成 */
	SetSC(Value: number): void;
	/** 获取道术攻击上限加成 */
	GetSCMax(): number;
	/** 道术攻击上限加成属性 */
	SCMax: number;
	/** 设置道术攻击上限加成 */
	SetSCMax(Value: number): void;
	/** 获取TC攻击下限加成 */
	GetTC(): number;
	/** TC攻击下限加成属性 */
	TC: number;
	/** 设置TC攻击下限加成 */
	SetTC(Value: number): void;
	/** 获取TC攻击上限加成 */
	GetTCMax(): number;
	/** TC攻击上限加成属性 */
	TCMax: number;
	/** 设置TC攻击上限加成 */
	SetTCMax(Value: number): void;
	/** 获取PC攻击下限加成 */
	GetPC(): number;
	/** PC攻击下限加成属性 */
	PC: number;
	/** 设置PC攻击下限加成 */
	SetPC(Value: number): void;
	/** 获取PC攻击上限加成 */
	GetPCMax(): number;
	/** PC攻击上限加成属性 */
	PCMax: number;
	/** 设置PC攻击上限加成 */
	SetPCMax(Value: number): void;
	/** 获取WC攻击下限加成 */
	GetWC(): number;
	/** WC攻击下限加成属性 */
	WC: number;
	/** 设置WC攻击下限加成 */
	SetWC(Value: number): void;
	/** 获取WC攻击上限加成 */
	GetWCMax(): number;
	/** WC攻击上限加成属性 */
	WCMax: number;
	/** 设置WC攻击上限加成 */
	SetWCMax(Value: number): void;
	/** 获取幸运值加成 */
	GetLuck(): number;
	/** 幸运值加成属性 */
	Luck: number;
	/** 设置幸运值加成 */
	SetLuck(Value: number): void;
	/** 获取准确度加成 */
	GetHitPoint(): number;
	/** 准确度加成属性 */
	HitPoint: number;
	/** 设置准确度加成 */
	SetHitPoint(Value: number): void;
	/** 获取攻击速度加成 */
	GetHitSpeed(): number;
	/** 攻击速度加成属性 */
	HitSpeed: number;
	/** 设置攻击速度加成 */
	SetHitSpeed(Value: number): void;
	/** 获取抗毒性加成 */
	GetAntiPoison(): number;
	/** 抗毒性加成属性 */
	AntiPoison: number;
	/** 设置抗毒性加成 */
	SetAntiPoison(Value: number): void;
	/** 获取中毒恢复加成 */
	GetPoisonRecover(): number;
	/** 中毒恢复加成属性 */
	PoisonRecover: number;
	/** 设置中毒恢复加成 */
	SetPoisonRecover(Value: number): void;
	/** 获取生命恢复加成 */
	GetHealthRecover(): number;
	/** 生命恢复加成属性 */
	HealthRecover: number;
	/** 设置生命恢复加成 */
	SetHealthRecover(Value: number): void;
	/** 获取魔法恢复加成 */
	GetSpellRecover(): number;
	/** 魔法恢复加成属性 */
	SpellRecover: number;
	/** 设置魔法恢复加成 */
	SetSpellRecover(Value: number): void;
	/** 获取魔法躲避加成 */
	GetAntiMagic(): number;
	/** 魔法躲避加成属性 */
	AntiMagic: number;
	/** 设置魔法躲避加成 */
	SetAntiMagic(Value: number): void;
	/** 获取伤害吸收加成 */
	GetDamageAbsorb(): number;
	/** 伤害吸收加成属性 */
	DamageAbsorb: number;
	/** 设置伤害吸收加成 */
	SetDamageAbsorb(Value: number): void;
	/** 获取伤害增加加成 */
	GetDamageAdd(): number;
	/** 伤害增加加成属性 */
	DamageAdd: number;
	/** 设置伤害增加加成 */
	SetDamageAdd(Value: number): void;
	/** 获取重击率加成 */
	GetPunchHit(): number;
	/** 重击率加成属性 */
	PunchHit: number;
	/** 设置重击率加成 */
	SetPunchHit(Value: number): void;
	/** 获取暴击率加成 */
	GetCriticalHit(): number;
	/** 暴击率加成属性 */
	CriticalHit: number;
	/** 设置暴击率加成 */
	SetCriticalHit(Value: number): void;
	/** 获取反弹率加成 */
	GetRebound(): number;
	/** 反弹率加成属性 */
	Rebound: number;
	/** 设置反弹率加成 */
	SetRebound(Value: number): void;
	/** 获取经验倍率加成 */
	GetExpRate(): number;
	/** 经验倍率加成属性 */
	ExpRate: number;
	/** 设置经验倍率加成 */
	SetExpRate(Value: number): void;
	/** 获取金币倍率加成 */
	GetGoldRate(): number;
	/** 金币倍率加成属性 */
	GoldRate: number;
	/** 设置金币倍率加成 */
	SetGoldRate(Value: number): void;
	/** 获取物品爆率加成 */
	GetItemRate(): number;
	/** 物品爆率加成属性 */
	ItemRate: number;
	/** 设置物品爆率加成 */
	SetItemRate(Value: number): void;
	/** 获取附加伤害加成 */
	GetAppendDamage(): number;
	/** 附加伤害加成属性 */
	AppendDamage: number;
	/** 设置附加伤害加成 */
	SetAppendDamage(Value: number): void;
	/** 获取速度点数加成 */
	GetSpeedPoint(): number;
	/** 速度点数加成属性 */
	SpeedPoint: number;
	/** 设置速度点数加成 */
	SetSpeedPoint(Value: number): void;
	/** 获取暴击防御加成 */
	GetCriticalHitDef(): number;
	/** 暴击防御加成属性 */
	CriticalHitDef: number;
	/** 设置暴击防御加成 */
	SetCriticalHitDef(Value: number): void;
	/** 获取重击防御加成 */
	GetPunchHitDef(): number;
	/** 重击防御加成属性 */
	PunchHitDef: number;
	/** 设置重击防御加成 */
	SetPunchHitDef(Value: number): void;
	/** 获取附加伤害防御加成 */
	GetAppendDamageDef(): number;
	/** 附加伤害防御加成属性 */
	AppendDamageDef: number;
	/** 设置附加伤害防御加成 */
	SetAppendDamageDef(Value: number): void;
	/** 获取生命值倍率加成 */
	GetHPRate(): number;
	/** 生命值倍率加成属性 */
	HPRate: number;
	/** 设置生命值倍率加成 */
	SetHPRate(Value: number): void;
	/** 获取魔法值倍率加成 */
	GetMPRate(): number;
	/** 魔法值倍率加成属性 */
	MPRate: number;
	/** 设置魔法值倍率加成 */
	SetMPRate(Value: number): void;
	/** 获取武器强度加成 */
	GetWeaponStrong(): number;
	/** 武器强度加成属性 */
	WeaponStrong: number;
	/** 设置武器强度加成 */
	SetWeaponStrong(Value: number): void;
	/** 获取神圣值加成 */
	GetHoly(): number;
	/** 神圣值加成属性 */
	Holy: number;
	/** 设置神圣值加成 */
	SetHoly(Value: number): void;
	/** 获取负重加成 */
	GetWearWeight(): number;
	/** 负重加成属性 */
	WearWeight: number;
	/** 设置负重加成 */
	SetWearWeight(Value: number): void;
	/** 获取最大负重加成 */
	GetMaxWeight(): number;
	/** 最大负重加成属性 */
	MaxWeight: number;
	/** 设置最大负重加成 */
	SetMaxWeight(Value: number): void;
	/** 获取重击附加伤害加成 */
	GetPunchHitAppendDamage(): number;
	/** 重击附加伤害加成属性 */
	PunchHitAppendDamage: number;
	/** 设置重击附加伤害加成 */
	SetPunchHitAppendDamage(Value: number): void;
	/** 获取暴击附加伤害加成 */
	GetCriticalHitAppendDamage(): number;
	/** 暴击附加伤害加成属性 */
	CriticalHitAppendDamage: number;
	/** 设置暴击附加伤害加成 */
	SetCriticalHitAppendDamage(Value: number): void;
	/** 获取致命一击加成 */
	GetFatalHit(): number;
	/** 致命一击加成属性 */
	FatalHit: number;
	/** 设置致命一击加成 */
	SetFatalHit(Value: number): void;
	/** 获取重击武器倍率加成 */
	GetPunchHitWRate(): number;
	/** 重击武器倍率加成属性 */
	PunchHitWRate: number;
	/** 设置重击武器倍率加成 */
	SetPunchHitWRate(Value: number): void;

}
/**
 * M2引擎核心类
 * 游戏引擎的核心管理类
 * 包含服务器管理、玩家管理、地图管理、事件系统等核心功能
 */
/**
 * JONE游戏引擎核心类
 * 提供游戏服务器的所有核心功能，包括玩家管理、地图管理、怪物管理、NPC管理、行会管理等
 * 这是整个游戏引擎的中心控制类，所有主要的游戏逻辑都通过此类进行管理
 */
declare class TM2Core {
	/**
	 * 获取全局变量值
	 * @param index 变量索引（0-999）
	 * @returns 变量值
	 * @description 获取全局数值变量的值，这些变量在整个服务器范围内共享
	 * @example const value = GameLib.GetGVar(0)
	 */
	GetGVar(index: number): number;
	/** 全局变量属性 */
	GVar: number;

	/**
	 * 获取字符串变量值
	 * @param index 变量索引（0-999）
	 * @returns 字符串值
	 * @description 获取全局字符串变量的值
	 * @example const text = GameLib.GetAVar(0)
	 */
	GetAVar(index: number): string;
	/** 字符串变量属性 */
	AVar: string;

	/**
	 * 获取整数变量值
	 * @param index 变量索引（0-999）
	 * @returns 整数值
	 * @description 获取全局整数变量的值
	 */
	GetIVar(index: number): number;
	/** 整数变量属性 */
	IVar: number;

	/**
	 * 获取用户变量值
	 * @param index 变量索引（0-999）
	 * @returns 用户变量值
	 * @description 获取用户自定义变量的值
	 */
	GetUVar(index: number): string;
	/** 用户变量属性 */
	UVar: string;

	/**
	 * 设置全局变量值
	 * @param index 变量索引（0-999）
	 * @param Value 要设置的值
	 * @description 设置全局数值变量的值
	 * @example GameLib.SetGVar(0, 100)
	 */
	SetGVar(index: number, Value: number): void;

	/**
	 * 设置字符串变量值
	 * @param index 变量索引（0-999）
	 * @param Value 要设置的字符串值
	 * @description 设置全局字符串变量的值
	 * @example GameLib.SetAVar(0, "测试文本")
	 */
	SetAVar(index: number, Value: string): void;

	/**
	 * 设置整数变量值
	 * @param index 变量索引（0-999）
	 * @param Value 要设置的整数值
	 * @description 设置全局整数变量的值
	 */
	SetIVar(index: number, Value: number): void;

	/**
	 * 设置用户变量值
	 * @param index 变量索引（0-999）
	 * @param Value 要设置的值
	 * @description 设置用户自定义变量的值
	 */
	SetUVar(index: number, Value: string): void;
	/**
	 * 获取在线玩家数量
	 * @returns 当前在线玩家数量
	 * @description 获取当前服务器在线的玩家总数
	 * @example const onlineCount = GameLib.GetPlayCount()
	 */
	GetPlayCount(): number;
	/** 在线玩家数量属性（只读） */
	readonly PlayCount: number;

	/**
	 * 根据索引获取玩家对象
	 * @param index 玩家索引（0到PlayCount-1）
	 * @returns 玩家对象，如果索引无效则返回null
	 * @description 通过索引获取在线玩家对象
	 * @example const player = GameLib.GetPlayer(0)
	 */
	GetPlayer(index: number): TPlayObject;
	/** 踢出指定玩家 */
	Kick(APlayName: string): void;
	/** 踢出所有玩家 */
	KickAll(): void;
	/** 清除地图怪物 */
	ClearMapMon: (AMapName: string, ANoDrop?: boolean, AMonName?: string) => void;
	/** 在指定位置显示特效 */
	ShowEffect(Map: string, MapX: number, MapY: number, Effect: number, IntervalTime: number): void;
	/** 在指定位置显示特效（扩展版本） */
	ShowEffect2(Map: string, MapX: number, MapY: number, EffectID: number, LoopCount: number): void;
	/** 创建攻击事件 */
	CreateAttackEvent: (Map: string, AMapX: number, AMapY: number, ATime: number, AInterval: number, ADamage: number, SkillEffectID?: number, MagId?: number, MagLv?: number) => boolean;
	/** 创建攻击事件（第二版本） */
	CreateAttackEvent2: (Map: string, AMapX: number, AMapY: number, ATime: number, AInterval: number, ADamage: number, UIEffectID?: number, MagId?: number, MagLv?: number) => boolean;
	/** 删除攻击事件 */
	DeleteAttackEvent(AMap: TEnvirnoment, AMapX: number, AMapY: number, Owner: TActor, MagId: number): number;
	/**
	 * 召回地图中的所有玩家
	 * @param ASourceMap 源地图名称（要召回玩家的地图）
	 * @param ADestMap 目标地图名称（召回到的地图）
	 * @description 将指定源地图中的所有玩家传送到目标地图
	 * @example GameLib.RecallMap("石墓阵", "比奇城")
	 */
	RecallMap(ASourceMap: string, ADestMap: string): void;
	/** 生成怪物到指定地图位置 */
	MonGen: (AMap: string, AMonName: string, AMonCount: number, AMapX: number, AMapY: number, ARange: number, ACamp?: number, ANation?: number, ATag?: number, ARevivalEvent?: boolean, ADieEvent?: boolean, AKillerEvent?: boolean, ADamageEvent?: boolean) => TActorList;
	/** 生成怪物到指定地图位置（扩展版本） */
	MonGenEx(AMap: TEnvirnoment, AMonName: string, AMonCount: number, AMapX: number, AMapY: number, ARange: number, ACamp: number, ANation: number, ATag: number, ARevivalEvent: boolean, ADieEvent: boolean, AKillerEvent: boolean, ADamageEvent: boolean): TActorList;
	/** 在任务地图放置怪物 */
	MobPlace: (AMissionMap: string, AMissionX: number, AMissionY: number, AMonName: string, AX: number, AY: number, ACount?: number, ARange?: number, ACamp?: number, ANation?: number, ATag?: number, ARevivalEvent?: boolean, ADieEvent?: boolean, AKillerEvent?: boolean, ADamageEvent?: boolean) => TActorList;
	/** 在任务地图放置怪物（扩展版本） */
	MobPlaceEx(AMissionMap: TEnvirnoment, AMissionX: number, AMissionY: number, AMonName: string, AX: number, AY: number, ACount: number, ARange: number, ACamp: number, ANation: number, ATag: number, ARevivalEvent: boolean, ADieEvent: boolean, AKillerEvent: boolean, ADamageEvent: boolean): TActorList;
	/** 获取服务器名称 */
	GetServerName(): string;
	/** 服务器名称属性（只读） */
	readonly ServerName: string;
	/** 获取服务器ID */
	GetServerID(): number;
	/** 服务器ID属性（只读） */
	readonly ServerID: number;
	/** 获取数据库引擎对象 */
	GetDBEngine(): TDBEngine;
	/** 数据库引擎属性（只读） */
	readonly DBEngine: TDBEngine;
	/** 获取排行榜对象 */
	GetToptenz(): TToptenz;
	/** 排行榜属性（只读） */
	readonly Toptenz: TToptenz;
	/** 写入日志 */
	WriteLog(Log: string): void;
	/** 刷新数据库物品 */
	RefreshDBItems(): void;
	/** 获取服务器启动时间 */
	GetStartTime(): number;
	/** 服务器启动时间属性（只读） */
	readonly StartTime: number;
	/** 获取环境路径 */
	GetEnvirPath(): string;
	/** 环境路径属性（只读） */
	readonly EnvirPath: string;
	/** 获取程序路径 */
	GetPath(): string;
	/** 程序路径属性（只读） */
	readonly Path: string;
	/** 广播移动消息 */
	BroadcastMoveMessage(Message: string, _Type: number, DuraTick: number): void;
	/** 获取客户端速度 */
	GetClientSpeed(): number;
	/** 客户端速度属性 */
	ClientSpeed: number;
	/** 设置客户端速度 */
	SetClientSpeed(Value: number): void;
	/** 生成指定范围内的随机数 */
	RandomRange(Min: number, Max: number): number;
	/** 构建数据库 */
	BuildDB(): void;
	/** 锁定引擎 */
	Lock(): void;
	/** 解锁引擎 */
	UnLock(): void;
	/** 加载引擎数据 */
	Load(): void;
	/** 保存引擎数据 */
	Save(isStop: boolean): void;
	/** 重新加载脚本引擎 */
	ReLoadScriptEngine(): void;
	/** 创建标识字符串列表 */
	CreateIdentStringList(Ident: string): TStringList;
	/** 获取标识字符串列表 */
	GetIdentStringList(Ident: string): TStringList;
	/** 标识字符串列表属性（只读） */
	readonly IdentStringList: TStringList;
	/** 释放标识字符串列表 */
	FreeIdentStringList(Ident: string): void;
	/** 创建字符串列表 */
	CreateStringList(): TStringList;
	/** 调试输出字符串列表 */
	DebugOutStringList(): void;
	/** 定义字符串变量 */
	DefString(AVarName: string): TVarValue;
	/** 定义整数变量 */
	DefInteger(AVarName: string): TVarValue;
	/** 定义日期时间变量 */
	DefDateTime(AVarName: string): TVarValue;
	/** 定义浮点数变量 */
	DefFloat(AVarName: string): TVarValue;
	/** 定义布尔变量 */
	DefBoolean(AVarName: string): TVarValue;
	/** 清空变量表 */
	ClearVarTable(): void;
	/** 移除指定变量 */
	RemoveVar(AName: string): void;
	/** 广播消息给所有玩家 */
	Broadcast(Msg: string): void;
	/** 广播带颜色的说话消息 */
	BroadcastSay(Msg: string, FontColor: number, Backgound: number): void;
	/** 广播顶部消息 */
	BroadcastTopMessage(Message: string): void;
	/** 广播中央消息 */
	BroadcastCenterMessage: (Message: string, DuraTick?: number) => void;
	/** 广播倒计时消息 */
	BroadcastCountDownMessage(Message: string): void;
	/** 启动任务管理器方法 */
	StartQuest(AQManagerMethod: string): void;
	/** 根据物品索引查找标准物品 */
	FindStdItem(ItemIndex: number): TStdItem;
	/** 根据物品名称查找物品索引 */
	FindItemIndex(Name: string): number;
	/** 根据地图名称查找地图环境 */
	FindMap(AMap: string): TEnvirnoment;
	/** 添加地图路径 */
	AddMapRoute(Name: string, Source: string, SourceX: number, SourceY: number, Dest: string, DestX: number, DestY: number, UsefulLife: number, Looks: number, ShowName: boolean): boolean;
	/** 删除地图路径 */
	DelMapRoute(Name: string): boolean;
	/** 创建副本地图 */
	CreateDuplicateMap(Name: string, UsefulLife: number): TEnvirnoment;
	/** 关闭副本地图 */
	CloseDuplicateMap(MapName: string): boolean;
	/** 关闭副本地图（扩展版本） */
	CloseDuplicateMapEx(Map: TEnvirnoment): boolean;
	/** 添加NPC到指定位置 */
	AddNpc(Name: string, Map: string, MapX: number, MapY: number, Appr: number, AUnitName: string): TNormNpc;
	/** 移除指定位置的NPC */
	RemoveNpc(Name: string, Map: string, MapX: number, MapY: number): boolean;
	/** 添加怪物NPC */
	AddMonNpc: (MonName: string, NpcName: string, Map: string, MapX: number, MapY: number, AUnitName?: string, ACamp?: number, ANation?: number, AttackDiffCamp?: boolean, AttackDiffNation?: boolean, AttackRed?: boolean, AttackMon?: boolean, MissionX?: number, MissionY?: number, MissionRange?: number) => TActor;
	/** 添加怪物NPC（扩展版本） */
	AddMonNpcEx: (MonName: string, NpcName: string, Map: TEnvirnoment, MapX: number, MapY: number, AUnitName?: string, ACamp?: number, ANation?: number, AttackDiffCamp?: boolean, AttackDiffNation?: boolean, AttackRed?: boolean, AttackMon?: boolean, MissionX?: number, MissionY?: number, MissionRange?: number) => TActor;
	/** 移除怪物NPC */
	RemoveMonNpc(NpcName: string, Map: string, MapX: number, MapY: number): boolean;
	/** 移除怪物NPC（扩展版本） */
	RemoveMonNpcEx(NpcName: string, Map: TEnvirnoment, MapX: number, MapY: number): boolean;
	/** 根据玩家名称查找玩家 */
	FindPlayer(AName: string): TPlayObject;
	/** 根据账号和玩家名称查找玩家 */
	FindPlayerEx(AAccount: string, AName: string): TPlayObject;
	/** 创建行会 */
	CreateGuild(AName: string, AChief: string): TGuild;
	/** 根据行会名称查找行会 */
	FindGuild(sGuildName: string): TGuild;
	/** 获取行会总数 */
	GetGuildCount(): number;
	/** 行会总数属性（只读） */
	readonly GuildCount: number;
	/** 根据索引获取行会 */
	GetGuildByIndex(index: number): TGuild;
	/** 根据索引获取行会属性（只读） */
	readonly GuildByIndex: TGuild;
	/** 删除行会 */
	DeleteGuild(sGuildName: string): boolean;
	/** 强制删除行会 */
	DeleteGuildForce(sGuildName: string): boolean;
	/** 添加行会战争 */
	AddGuildWar(SourceGuild: string, DesTGuild: string): boolean;
	/** 根据名称查找城堡 */
	FindCastle(Name: string): TUserCastle;
	/** 根据名称查找NPC */
	FindNpc(NpcName: string): TNormNpc;
	/** 根据地图和名称查找商人 */
	FindMerchant(MapName: string, MerchantName: string): TNormNpc;
	/** 根据标签查找商人 */
	FindMerchantByTag(ATag: number): TNormNpc;
	/** 保存玩家数据到文件 */
	SavePlayerToFile(Source: TPlayObject, AFileName: string): void;
	/** 添加克隆玩家 */
	AddClonePlayer(Source: TPlayObject, AName: string, Envir: TEnvirnoment, MapX: number, MapY: number): TActor;
	/** 从文件添加克隆玩家 */
	AddClonePlayerFromFile(AFileName: string, AName: string, Envir: TEnvirnoment, MapX: number, MapY: number): TActor;
	/** 延迟跳转 */
	DelayGoto(ID: number, AIntervalTime: number, Once: boolean): boolean;
	/** 清除延迟跳转 */
	ClearDelayGoto(ID: number): void;
	/** 重命名玩家 */
	RenamePlayer(PlayObject: TPlayObject, NewName: string): void;
	/** 在地图上投掷物品 */
	ThrowItem: (MapName: string, ItemName: string, MapX: number, MapY: number, Range: number, Count: number, Owner?: TActor, ForbidTime?: number, CallBackIdent?: number) => boolean;
	/** 在地图上投掷物品（扩展版本） */
	ThrowItemEx: (Map: TEnvirnoment, ItemName: string, MapX: number, MapY: number, Range: number, Count: number, Owner?: TActor, ForbidTime?: number, CallBackIdent?: number) => boolean;
	/** 随机升级物品 */
	RandomUpgrade(UserItem: TUserItem): boolean;
	/** 随机升级物品点数 */
	RandomUpgradePoint(UserItem: TUserItem): boolean;
	/** 随机升级物品等级 */
	RandomUpgradeLevel(UserItem: TUserItem): void;
	/** 添加机器人 */
	AddRobot(ExecTime: number, AMethod: string): void;
	/** 随从叛变 */
	SlaveMutiny(ATime: number): void;
	/** 获取最后投掷的物品列表 */
	GetLastThrowItemList(): TUserItemListReadOnly;
	/** 最后投掷的物品列表属性（只读） */
	readonly LastThrowItemList: TUserItemListReadOnly;
	/** 从字符串加载用户物品 */
	LoadUserItemFromString(S: string): TUserItem;
	/** 保存用户物品为字符串 */
	SaveUserItemToString(UserItem: TUserItem): string;
	/** 保存物品到仓库 */
	SaveItemToStore(Item: TUserItem, ChrName: string, EventType: number, Param: string): string;
	/** 从仓库加载物品 */
	LoadItemFromStore(Index: string): TUserItem;
	/** 获取仓库物品类型 */
	GetStoreItemType(Index: string): number;
	/** 仓库物品类型属性（只读） */
	readonly StoreItemType: number;
	/** 获取玩家的所有仓库物品 */
	GetAllStoreItem(ChrName: string): TStoreItemList;
	/** 所有仓库物品属性（只读） */
	readonly AllStoreItem: TStoreItemList;
	/** 获取指定类型的仓库物品 */
	GetStoreItemsWithType(ChrName: string, EventType: number): TStoreItemList;
	/** 指定类型的仓库物品属性（只读） */
	readonly StoreItemsWithType: TStoreItemList;
	/** 获取仅指定类型的仓库物品 */
	GetStoreItemsOnlyType(EventType: number): TStoreItemList;
	/** 仅指定类型的仓库物品属性（只读） */
	readonly StoreItemsOnlyType: TStoreItemList;
	/** 删除仓库物品 */
	DeleteStoreItem(Index: string): void;
	/** 复制用户物品 */
	CopyUserItem(Item: TUserItem): TUserItem;
	/** 删除多个仓库物品 */
	DeleteStoreItems(IndexList: TStringList): number;
	/** 获取IP地址的本地信息 */
	GetIPLocal(IP: string): string;
	/** IP本地信息属性（只读） */
	readonly IPLocal: string;
	/** 查询性能计数器 */
	QueryPerformanceCounter(): number;
	/** 查询性能频率 */
	QueryPerformanceFrequency(): number;
	/** 加载动态链接库 */
	LoadLibrary(FileName: string): number;
	/** 获取过程地址 */
	GetProcAddress(hModule: number, ProcName: string): number;
	/** 过程地址属性（只读） */
	readonly ProcAddress: number;
	/** 释放动态链接库 */
	FreeLibrary(hModule: number): boolean;
	/** 异步HTTP POST JSON请求 */
	ASyncHttpPostJson(Ident: string, URL: string, Json: string, TimeOut: number): void;
	/** 异步HTTP GET请求 */
	ASyncHttpGet(Ident: string, URL: string, TimeOut: number): void;
	/** 尝试获取资源 */
	TryGetResource(AName: string): TStringList;
	/** 发送邮件 */
	SendMail(AFrom: string, ATo: string, ASubject: string, AContent: string): void;
	/** 发送客户端速度变更通知 */
	SendChangeClientSpeed(): void;
	/** 休眠指定毫秒数 */
	Sleep(MS: number): void;
	/** 根据技能名称获取技能ID */
	GetMagicIdByName(Name: string): number;
	/** 检查目录是否存在 */
	DirectoryExists(Name: string): boolean;
	/** 创建目录 */
	CreateDir(Name: string): boolean;
	/** 检查文件是否存在 */
	FileExists(Name: string): boolean;
	/** 获取字符串变量值 */
	VarString(AVarName: string): TVarValue;
	/** 获取整数变量值 */
	VarInteger(AVarName: string): TVarValue;
	/** 获取日期时间变量值 */
	VarDateTime(AVarName: string): TVarValue;
	/** 获取浮点数变量值 */
	VarFloat(AVarName: string): TVarValue;
	/** 获取布尔变量值 */
	VarBoolean(AVarName: string): TVarValue;
	/** 创建快速INI文件对象 */
	CreateFastIniFile(AFileName: string): TFastIniFile;
	/** 创建角色列表 */
	CreateActorList(): TActorList;
	/** 创建掩码字符串 */
	MakeMaskString(AStr: string): string;
	/** 获取管理员NPC */
	GetManagerNpc(): TNormNpc;
	/** 管理员NPC属性（只读） */
	readonly ManagerNpc: TNormNpc;
	/** 获取Q功能NPC */
	GetQFunctionNpc(): TNormNpc;
	/** Q功能NPC属性（只读） */
	readonly QFunctionNpc: TNormNpc;
	/** 强制创建目录 */
	ForceDirectories(Path: string): boolean;
	/** 删除文件 */
	DeleteFile(Path: string): boolean;
	/** 创建文件流 */
	CreateFileStream(Path: string, Mode: number): TFileStream;
	/** 获取文件流打开模式 */
	FileStreamOpenMode(): string;
	/** 删除地图路径 */
	DeleteMapRoute(RouterName: string): boolean;
	/** 获取系统时间戳 */
	GetTickCount(): number;
	/** 系统时间戳属性（只读） */
	readonly TickCount: number;
	/** 从字符串列表创建快速INI文件 */
	CreateFastIniFromStrings(List: TStringList): TFastIniFile;
	/** 清除脚本创建的对象 */
	ClearScriptCreateObject(): void;
	/** 创建用户物品列表 */
	CreateUserItemList(AName: string, SaveToDB: boolean): TUserItemList;
	/** 获取用户物品列表 */
	GetUserItemList(AName: string): TUserItemList;
	/** 用户物品列表属性（只读） */
	readonly UserItemList: TUserItemList;
	/** 删除用户物品列表 */
	DeleteUserItemList(AName: string): void;
	/** 根据名称创建用户物品 */
	CreateUserItemByName(ItemName: string): TUserItem;
	/** 销毁用户物品 */
	DestoryUserItem(Item: TUserItem, Force: boolean): void;
	/** 读取目录文件列表 */
	ReadDirFiles(Path: string, Ext: string, IncludeSubDir: boolean): TStringList;
	/** 异步HTTP POST JSON请求（扩展版本） */
	ASyncHttpPostJsonEx: (url: string, postJson: string, timeout: number, cb: HttpAsyncResult) => void;
	/** 异步HTTP GET请求（扩展版本） */
	ASyncHttpGetEx: (url: string, timeout: number, cb: HttpAsyncResult) => void;
	/** 更新玩家账号 */
	UpdatePlayerAccount(Account: string, PlayerName: string, NewAccount: string, Log: string): void;
	/** 获取自定义保存字符串 */
	GetCustomSaveStr(): string;
	/** 自定义保存字符串属性 */
	CustomSaveStr: string;
	/** 设置自定义保存字符串 */
	SetCustomSaveStr(Value: string): void;
	/** 获取管理员UI */
	GetAdminUI(): TProjectUIAdmin;
	/** 管理员UI属性（只读） */
	readonly AdminUI: TProjectUIAdmin;
	/** 检查机器人是否正在运行 */
	HasRobotRun(RobotName: string): boolean;
	/** 检查是否有延迟跳转 */
	HasDelayGoto(ID: number): boolean;
	/** 检查用户物品是否有效 */
	IsvaildUserItem(Item: TUserItem): boolean;
	/** 修复记录地图点物品显示名称 */
	FixRecordMapPointItemShowName(Item: TUserItem): void;
	/** 创建阻挡事件 */
	CreateBlockEvent(MapName: string, X: number, Y: number, Time: number, UIEffect: number): void;
	/** 根据句柄获取角色 */
	GetActorByHandle(ActorHandle: number): TActor;
	/** 根据句柄获取角色属性（只读） */
	readonly ActorByHandle: TActor;
	/** 持久化变量（可存储任意类型数据） */
	V: any;
	/** 临时变量（运行时变量，不会保存） */
	R: any;
	/** NPC被点击事件 */
	onNpcClicked: (Npc: TNormNpc, PlayObject: TPlayObject, ClickLabel: string, AUnitName: string, AParams: string) => void;
	/** 玩家升级事件 */
	onPlayerLevelUp: (PlayObject: TPlayObject, Level: number) => void;
	/** 玩家登录事件 */
	onPlayerLogin: (PlayObject: TPlayObject, OnlineAddExp: boolean) => void;
	/** 玩家初始化事件 */
	onPlayerInitialization: (PlayObject: TPlayObject) => void;
	/** 玩家重连事件 */
	onPlayerReconnection: (PlayObject: TPlayObject, OnlineAddExp: boolean) => void;
	/** 玩家离线事件 */
	onPlayerOffLine: (PlayObject: TPlayObject, OnlineAddExp: boolean) => void;
	/** 获取行会公告消息事件 */
	onGetLineNoticeMessage: (PlayObject: TPlayObject, Message: string) => string;
	/** 引擎启动事件 */
	onEngineStart: (Text: string, NewText: number) => number;
	/** 玩家求助事件 */
	onPlayerHelp: (PlayObject: TPlayObject) => void;
	/** 玩家热键事件 */
	onPlayerHot: (PlayObject: TPlayObject) => void;
	/** 玩家回城事件 */
	onPlayerPayHome: (PlayObject: TPlayObject) => void;
	/** 玩家改名状态事件 */
	onPlayerReNameState: (State: number, PlayObject: TPlayObject, OldName: string, Newname: string) => void;
	/** 脚本引擎初始化事件 */
	onScriptEngineInit: (isReload: boolean) => void;
	/** 脚本引擎结束事件 */
	onScriptEngineFinal: (isReload: boolean) => void;
	/** 逻辑循环开始事件 */
	onLogicLoopBegin: () => void;
	/** 逻辑循环结束事件 */
	onLogicLoopEnd: () => void;
	/** 监控复活事件 */
	onMonitorRevival: (Envir: TEnvirnoment, ActorObject: TActor, Tag: number) => void;
	/** 监控死亡事件 */
	onMonitorDie: (Envir: TEnvirnoment, ActorObject: TActor, Killer: TActor, Tag: number) => void;
	/** 监控击杀事件 */
	onMonitorKill: (Envir: TEnvirnoment, ActorObject: TActor, Player: TPlayObject, Tag: number) => void;
	/** 监控伤害事件 */
	onMonitorDamage: (ActorObject: TActor, ADamageSource: TActor, Tag: number, Value: number) => void;
	/** 监控伤害事件(扩展) */
	onMonitorDamageEx: (ActorObject: TActor, ADamageSource: TActor, Tag: number, SkillID: number, SkillLevel: number, Value: number) => number;
	/** 打开会员事件 */
	onOpenMember: (PlayObject: TPlayObject) => void;
	/** 处理命令事件 */
	onProcessCommand: (Play: TPlayObject, Command: string, Params: string, Processed: boolean) => boolean;
	/** 行会初始化事件 */
	onGuildInitialize: (AGuild: TGuild) => void;
	/** 异步HTTP POST结果事件 */
	onAsyncHttpPostResult: (Ident: string, URL: string, ResultText: string, ErrorStr: string) => void;
	/** 异步HTTP GET结果事件 */
	onAsyncHttpGetResult: (Ident: string, URL: string, ResultText: string, ErrorStr: string) => void;
	/** 执行扩展按钮事件 */
	onExecuteExtendButton: (Play: TPlayObject, CommandText: string) => void;
	/** 玩家速度异常事件 */
	onPlayerSpeedException: (Play: TPlayObject, Kick: boolean) => boolean;
	/** 脚本按钮点击事件 */
	onScriptButtonClick: (PlayObject: TPlayObject, Flag: string) => void;
	/** 玩家复活事件 */
	onPlayerReAlive: (Player: TPlayObject, Event: TReAliveEvent) => void;
	/** 击杀玩家事件 */
	onKillPlayer: (Killer: TPlayObject, Player: TPlayObject) => void;
	/** 随从击杀玩家事件 */
	onSlaveKillPlayer: (Master: TPlayObject, Slave: TActor, Player: TPlayObject) => void;
	/** 玩家死亡事件 */
	onPlayerDie: (Player: TPlayObject, Killer: TActor) => void;
	/** 击杀怪物事件 */
	onKillMonster: (Player: TPlayObject, Monster: TActor) => void;
	/** 随从击杀怪物事件 */
	onSlaveKillMonster: (Player: TPlayObject, Slave: TActor, Monster: TActor) => void;
	/** 决斗结束事件 */
	onDuelEnd: (Winner: TPlayObject, Loser: TPlayObject) => void;
	/** 背包物品事件 */
	onBagItemEvent: (Player: TPlayObject, Item: TUserItem, EventType: number, EventID: number) => void;
	/** 购买商店物品事件 */
	onBuyShopItem: (Player: TPlayObject, UserItem: TUserItem, Kind: number, ShopType: number, Count: number, Price: number) => void;
	/** 点击标志图标事件 */
	onClickSighIcon: (Player: TPlayObject, MethodID: number) => void;
	/** 获取宝箱物品事件 */
	onGetBoxItem: (Player: TPlayObject, Item: TUserItem, BoxID: number) => void;
	/** 进度事件 */
	onProgressEvent: (Player: TPlayObject, EventID: number) => void;
	/** 进度失败事件 */
	onProgressFaild: (Player: TPlayObject, EventID: number) => void;
	/** 物品灵魂升级事件 */
	onItemSoulLevelUp: (Player: TPlayObject, UserItem: TUserItem) => void;
	/** 激活称号改变事件 */
	onActiveTitleChanged: (Player: TPlayObject) => void;
	/** 侧边栏按钮点击事件 */
	onSideBarButtonClick: (Player: TPlayObject, AName: string) => void;
	/** 行会扩展按钮点击事件 */
	onGuildExtendButtonClick: (Player: TPlayObject) => void;
	/** 购买商店物品结束事件 */
	onBuyShopItemEnd: (Player: TPlayObject, ItemName: string, Kind: number, ShopType: number, Count: number, ActualCount: number, Price: number) => void;
	/** 行会添加成员事件 */
	onGuildAddedMember: (Guild: TGuild, Player: TPlayObject) => void;
	/** 行会移除成员事件 */
	onGuildRemovedMember: (Guild: TGuild, Player: string) => void;
	/** 组队添加成员事件 */
	onGroupAddedMember: (Owner: TPlayObject, Member: TPlayObject) => void;
	/** 组队移除成员事件 */
	onGroupRemovedMember: (Owner: TPlayObject, Member: TPlayObject) => void;
	/** 行会添加成员前事件 */
	onBeforeGuildAddMember: (Guild: TGuild, PlayObject: TPlayObject, boAccept: boolean) => boolean;
	/** 脚本允许升级事件 */
	onScriptAllowLevelUp: (PlayObject: TPlayObject, Level: number, Allow: boolean) => boolean;
	/** 玩家动作事件 */
	onPlayerAction: (PlayObject: TPlayObject, Action: number, Allow: boolean) => boolean;
	/** 发送热键事件 */
	onSendHotKey: (Player: TPlayObject, Akey: number, KeyCtrl: boolean, KeyAlt: boolean, ATargetActor: TActor, X: number, Y: number) => void;
	/** 玩家丢弃物品事件 */
	/** 玩家丢弃物品事件 */
	onPlayerDropItem: (Player: TPlayObject, Item: TUserItem, X: number, Y: number, ISUseItem: boolean, Accept: boolean) => boolean;
	/** 玩家扔物品事件 */
	onPlayerThrowItem: (Player: TPlayObject, Item: TUserItem, X: number, Y: number, Accept: boolean) => boolean;
	/** 怪物掉落物品事件 */
	onMonDropItem: (Actor: TActor, Monster: TActor, UserItem: TUserItem, Envir: TEnvirnoment, X: number, Y: number, Accept: boolean) => boolean;
	/** 按怪物名称掉落物品事件 */
	onDropItemByMonName: (Player: TPlayObject, Monster: string, UserItem: TUserItem, Accept: boolean) => boolean;
	/** 挖矿掉落物品事件 */
	onMineDropItem: (Player: TPlayObject, UserItem: TUserItem, Envir: TEnvirnoment, X: number, Y: number, Accept: boolean) => boolean;
	/** 收集前事件 */
	onBeforeCollect: (Player: TPlayObject, AMon: TActor, Accept: boolean) => boolean;
	/** 收集事件 */
	onCollect: (Player: TPlayObject, AMon: TActor, Accept: boolean) => boolean;
	/** 屠宰物品事件 */
	onButchItem: (Player: TPlayObject, Monster: TActor, UserItem: TUserItem, Accept: boolean) => boolean;
	/** 标准模式功能事件 */
	onStdModeFunc: (Player: TPlayObject, UserItem: TUserItem, Accept: boolean) => boolean;
	/** 物品点击物品事件 */
	onItemClickItem: (Player: TPlayObject, Source: TUserItem, Dest: TUserItem, Accept: boolean) => boolean;
	/** 拾取物品事件 */
	onPickupItem: (Player: TPlayObject, Envir: TEnvirnoment, UserItem: TUserItem, Accept: boolean) => boolean;
	/** 物品点击使用物品事件 */
	onItemClickUseItem: (Player: TPlayObject, ItemWhere: TItemWhere, Source: TUserItem, Dest: TUserItem, Accept: boolean) => boolean;
	/** 穿戴物品事件 */
	onTakeOnItem: (Player: TPlayObject, UserItem: TUserItem, ItemWhere: TItemWhere, Accept: boolean) => boolean;
	/** 脱下物品事件 */
	onTakeOffItem: (Player: TPlayObject, UserItem: TUserItem, ItemWhere: TItemWhere, Accept: boolean) => boolean;
	/** 穿戴物品后事件 */
	onAfterTakeOnItem: (Player: TPlayObject, TakeOnUserItem: TUserItem, TakeOffItem: TUserItem, ItemWhere: TItemWhere) => void;
	/** 脱下物品后事件 */
	onAfterTakeOffItem: (Player: TPlayObject, TakeOffItem: TUserItem, ItemWhere: TItemWhere) => void;
	/** 获得经验事件 */
	onGetExp: (Player: TPlayObject, Exp: number, ResultExp: number) => number;
	/** 获得经验扩展事件 */
	onGetExpEx: (Player: TPlayObject, ExpActor: TActor, Exp: number, ResultExp: number) => number;
	/** 精炼按钮点击事件 */
	onRefineButtonClick: (Player: TPlayObject, Handled: boolean) => boolean;
	/** 精炼物品事件 */
	onRefineItem: (Player: TPlayObject, Item1: TUserItem, Item2: TUserItem, Item3: TUserItem, Handled: boolean) => boolean;
	/** 行会移除成员前事件 */
	onBeforeGuildRemoveMember: (Guild: TGuild, Player: string, Accept: boolean) => boolean;
	/** 摆摊上架物品事件 */
	onStallPutOn: (Player: TPlayObject, Item: TUserItem, GoldPrice: number, GameGoldPrice: number, GamePoint: number, Accept: boolean) => boolean;
	/** 摆摊下架物品事件 */
	onStallPutOff: (Player: TPlayObject, Item: TUserItem, GoldPrice: number, GameGoldPrice: number, GamePoint: number, Accept: boolean) => boolean;
	/** 摆摊购买物品事件 */
	onStallBuyItem: (Player: TPlayObject, StallName: string, Item: TUserItem, Gold: number, GameGold: number, GamePoint: number, Accept: boolean) => boolean;
	/** 摆摊更新物品事件 */
	onStallUpdateItem: (Player: TPlayObject, Item: TUserItem, OldGold: number, OldGameGold: number, OldGamePoint: number, Gold: number, GameGold: number, GamePoint: number, Accept: boolean) => boolean;
	/** 摆摊提取金币事件 */
	onStallExtractGold: (Player: TPlayObject, Gold: number, GameGold: number, GamePoint: number, Accept: boolean) => boolean;
	/** 停止摆摊后事件 */
	onAfterStopStall: (Player: TPlayObject) => void;
	/** 开始摆摊前事件 */
	onBeforeStartStall: (Player: TPlayObject, Accept: boolean) => boolean;
	/** 邮件发送前事件 */
	onMailBeforeSend: (Player: TPlayObject, SendTo: string, Item: TUserItem, Accept: boolean) => boolean;
	/** 邮件发送后事件 */
	onMailAfterSend: (Player: TPlayObject, SendTo: string) => void;
	/** 邮件接收事件 */
	onMailReceived: (Player: TPlayObject, MailFrom: string, Subject: string) => void;
	/** 随从升级事件 */
	onSlaveLevelUp: (Master: TActor, Slave: TActor, NewLevel: number, Accept: boolean) => boolean;
	/** 玩家添加技能事件 */
	onPlayAddSkill: (Player: TPlayObject, Magic: TUserMagic, Accept: boolean) => boolean;
	/** 魔法施法事件 */
	onMagicSpell: (Player: TPlayObject, UserMagic: TUserMagic, nTargetX: number, nTargetY: number, Target: TActor, Handled: boolean) => boolean;
	/** 玩家攻击事件 */
	onPlayerAttack: (Player: TPlayObject, UserMagic: TUserMagic, Target: TActor, Accept: boolean) => boolean;
	/** 骑马事件 */
	onRideOnHorse: (Player: TPlayObject, RideOn: boolean, Accept: boolean) => boolean;
	/** 自定义消息事件 */
	onCustomMessage: (Player: TPlayObject, AMessageToken: number, AParam1: number, AParam2: number, AParam3: number, AData: string) => void;
	/** 改变攻击模式事件 */
	onChangeAttackMode: (Player: TPlayObject, OldMode: TAttackMode, NewMode: TAttackMode) => TAttackMode;
	/** Alt+左键点击背包物品事件 */
	onAltAndLButtonClickBagItem: (Player: TPlayObject, Item: TUserItem) => void;
	/** 骰子事件 */
	onDiceEvent: (Player: TPlayObject, ATag: number, APoint1: number, APoint2: number, APoint3: number) => void;
	/** 开始摆摊前事件 */
	onBeforeOpenStall: (Player: TPlayObject, AAccept: boolean) => boolean;
	/** 变身为怪物开始事件 */
	onChangeToMonsterStart: (Actor: TActor, TargetMonName: string, nSec: number) => void;
	/** 变身为怪物结束事件 */
	onChangeToMonsterEnd: (Actor: TActor, TargetMonName: string) => void;
	/** 使用经验石物品事件 */
	onUseExpStoneItem: (Player: TPlayObject, Item: TUserItem, CanUse: boolean) => boolean;
	/** 点击游戏商店事件 */
	onClickGameShop: (PlayObject: TPlayObject, OpenDefalut: boolean) => boolean;
	/** 获取等级经验事件 */
	onGetLevelExp: (Level: number, Exp: number) => number;
	/** 获取玩家等级最大经验事件 */
	onGetPlayerLevelMaxExp: (PlayObject: TPlayObject, Level: number, MaxExp: number) => number;
	/** 添加Buff事件 */
	onAddBuff: (Actor: TActor, Buff: TBuff, Accept: boolean) => boolean;
	/** 移除Buff事件 */
	onRemoveBuff: (Actor: TActor, Buff: TBuff) => void;
	/** 自定义Buff行为事件 */
	onCustomBuffAct: (Actor: TActor, Buff: TBuff) => void;
	/** 聊天消息事件 */
	onChatMessage: (PlayObject: TPlayObject, Message: string, Allow: boolean) => boolean;
	/** 自定义进度事件 */
	onCustomProgressEvent: (FunctionName: string, Npc: TNormNpc, Player: TPlayObject, Args: string) => void;
	/** 锁定客户端密码事件 */
	onLockClientPassword: (FunctionName: string, Player: TPlayObject, Password: string, Args: string) => void;
	/** Alt+左键点击使用物品事件 */
	onAltAndLButtonClickUseItem: (Player: TPlayObject, Item: TUserItem, AItemWhere: number) => void;
	/** 拾取物品改变拾取者事件 */
	onPickUpItemChangePicker: (PickSender: TPlayObject, Item: TUserItem, Gold: number, WhoPicker: TPlayObject, ItemState: number) => [number, TPlayObject, number];
	/** 检查进入地图事件 */
	onCheckEnterMap: (Play: TPlayObject, SourceEnvir: TEnvirnoment, DestEnvir: TEnvirnoment, SourceX: number, SourceY: number, DestX: number, DestY: number, Accept: boolean) => boolean;
	/** 玩家进入地图事件 */
	onPlayerEnterMap: (Player: TPlayObject, SourceEnvir: TEnvirnoment, DestEnvir: TEnvirnoment, SourceX: number, SourceY: number, DestX: number, DestY: number) => void;
	/** 关闭副本地图事件 */
	onCloseDuplicatesMap: (Envir: TEnvirnoment) => void;
	/** 删除路径事件 */
	onDeleteRoute: (AName: string) => void;
	/** 外部NPC执行命令事件 */
	onExternalNpcExecCommand: (Command: string, Args: string) => void;
	/** 全局事件执行事件 */
	onGlobalEventExecute: (TimeID: number) => void;
	/** 全局事件移除事件 */
	onGlobalEventRemove: (TimeID: number) => void;
	/** 私有事件执行事件 */
	onPrivyEventExecute: (Play: TPlayObject, TimeID: number) => void;
	/** 私有事件移除事件 */
	onPrivyEventRemove: (Play: TPlayObject, TimeID: number) => void;
	/** 魔法NPC执行事件 */
	onMagicNpcExecute: (AMethod: string, ASource: TActor, ATarget: TActor, ATargetX: number, ATargetY: number, AMouseX: number, AMouseY: number, AList: TActorList, AMagic: TUserMagic, Processed: boolean) => boolean;
	/** 怪物攻击前选择魔法事件 */
	onMonSelectMagicBeforeAttack: (AMon: TActor, ATarget: TActor, AMagicID: number) => number;
	/** 技能动作执行事件 */
	onSkillActionExecute: (Source: TActor, Target: TActor, AMethod: string, nParam1: number, nParam2: number, sParam1: string, sParam2: string, MouseX: number, MouseY: number) => void;
	/** 技能角色选择条件自定义事件 */
	onSkillActorSelConditionCustom: (Source: TActor, Target: TActor, AMethod: string, N1: number, N2: number, N3: number, Processed: boolean) => boolean;
	/** 技能使用条件自定义事件 */
	onSkillUseCondtionCustom: (Source: TActor, AMethod: string, N1: number, N2: number, N3: number, Consume: boolean, Processed: boolean) => boolean;
	/** 任务完成事件 */
	onMissionFinish: (Player: TPlayObject, AMission: TMissionItem) => void;
	/** AI NPC执行事件 */
	onAINpcExecute: (Actor: TActor) => void;
	/** 脚本引擎错误事件 */
	onScriptEngineError: (E: Error) => void;
	/** 角色死亡事件 */
	onActorGhost: (Actor: TActor) => void;
	/** 查询用户状态事件 */
	onQueryUserState: (Player: TPlayObject, QueryTarget: TActor) => void;
	/** 异步数据库查询结果事件 */
	onAsyncDBQueryResult: (Ident: string, DBName: string, SQL: string, ErrorDesc: string, DataSet: TDataSet) => void;
	/** 异步数据库执行结果事件 */
	onAsyncDBExecResult: (Ident: string, DBName: string, SQL: string, ErrorDesc: string, RowAffected: number) => void;
	/** 玩家保存自定义保存字符串事件 */
	onPlayerSaveCustomSaveStr: (Player: TPlayObject, isOfflineSave: boolean) => void;
	/** 玩家加载自定义保存字符串事件 */
	onPlayerLoadCustomSaveStr: (Player: TPlayObject) => void;
	/** 更新玩家账号结果事件 */
	onUpdatePlayerAccountResult: (OldAccount: string, PlayerName: string, NewAccount: string, Sucess: boolean, ErrorDesc: string, Log: string) => void;
	/** 登录重置数据事件 */
	onLoginResetData: (Player: TPlayObject, isOnlineAddExp: boolean) => void;
	/** 引擎停止事件 */
	onEngineStop: (M2Core: TM2Core) => void;
	/** 管理员UI按钮点击事件 */
	onAdminUIButtonClick: (ButtonName: string) => void;
	/** 管理员UI编辑确认事件 */
	onAdminUIEditOk: (Name: string, InputText: string) => void;
	/** 管理员UI复选框改变事件 */
	onAdminUICheckBoxChange: (Name: string, Checked: boolean) => void;
	/** 点击锁定背包格子事件 */
	onClickLockedBagGrid: (Player: TPlayObject, GridIndex: number) => void;
	/** 开始自动战斗事件 */
	onStartAutoFight: (Player: TPlayObject) => void;
	/** 停止自动战斗事件 */
	onStopAutoFight: (Player: TPlayObject) => void;
	/** UI激活背包物品事件 */
	onUIActivedBagItemEvent: (Player: TPlayObject, UIName: string, ClientItemBagIndex: number, Item: TUserItem, KeyCtrl: boolean, KeyAlt: boolean, MouseButton: TMouseButton) => void;
	/** 客户端飘血数字事件 */
	onClientBleedNumber: (Player: TPlayObject, Actor: TActor, DamageSource: TActor, BleedNum: number, NumType: TDamageValueType, MagID: number, MagLv: number, BleedType: TBleedType, Allow: boolean) => boolean;
	/** 攻击角色伤害为零事件 */
	onAttackActorDamageIsZero: (Attacker: TActor, Target: TActor, Reason: number, Damage: number) => number;
	/** 随从忠诚度结束事件 */
	onSlaveRoyalOver: (Slave: TActor, Reason: number, Accept: boolean) => boolean;
	/** 使用药品事件 */
	onUseMedicine: (Player: TPlayObject, Item: TUserItem, Accept: boolean) => boolean;
	/** 投掷物品事件 */
	onThrowItem: (Map: TEnvirnoment, X: number, Y: number, CallBackIdent: number, Item: TUserItem, Owner: TActor) => void;
	/** 城堡开始战争事件 */
	onCastleStartWar: (Castle: TUserCastle) => void;
	/** 城堡停止战争事件 */
	onCastleStopWar: (Castle: TUserCastle) => void;
	/** 城堡被占领事件 */
	onCastleSeized: (Castle: TUserCastle, Guild: TGuild) => void;
	/** 随从能否拾取物品事件 */
	onSlaveCanPickUpItem: (Slave: TActor, Item: TMapItem, Accept: boolean) => boolean;
	/** 随从拾取物品事件 */
	onSlavePickUpItem: (Slave: TActor, Item: TMapItem, PickUpResult: TPickUpResult) => TPickUpResult;
	/** 玩家复活前事件 */
	onBeforePlayerReAlive: (Player: TPlayObject, Event: TReAliveEvent) => boolean;
	/** 右键点击地图位置事件 */
	onRightClickMapPos: (Player: TPlayObject, MapX: number, MapY: number) => void;
	/** 角色到达任务坐标事件 */
	onActorReachedMissionXY: (Actor: TActor, MissionX: number, MissionY: number, Range: number) => void;
	/** 查询客户端快捷栏物品数量结果事件 */
	onQueryClientQuickBarItemCountResult: (Player: TPlayObject, Ident: string, Count: number) => void;

}
/**
 * 变量值类
 * 用于存储和管理不同类型的变量值
 * 支持字符串、数字、日期时间、布尔值等类型
 */
declare class TVarValue {
	/** 获取变量名称 */
	GetName(): string;
	/** 变量名称 */
	readonly Name: string;
	/** 获取变量类型 */
	GetVarType(): number;
	/** 变量类型 */
	readonly VarType: number;
	/** 获取字符串值 */
	GetAsString(): string;
	/** 字符串值 */
	AsString: string;
	/** 设置字符串值 */
	SetAsString(Value: string): void;
	/** 获取浮点数值 */
	GetAsFloat(): number;
	/** 浮点数值 */
	AsFloat: number;
	/** 设置浮点数值 */
	SetAsFloat(Value: number): void;
	/** 获取整数值 */
	GetAsInteger(): number;
	/** 整数值 */
	AsInteger: number;
	/** 设置整数值 */
	SetAsInteger(Value: number): void;
	/** 保存变量值 */
	Save(): void;
	/** 获取日期时间值 */
	GetAsDateTime(): number;
	/** 日期时间值 */
	AsDateTime: number;
	/** 设置日期时间值 */
	SetAsDateTime(Value: number): void;
	/** 获取布尔值 */
	GetAsBoolean(): boolean;
	/** 布尔值 */
	AsBoolean: boolean;
	/** 设置布尔值 */
	SetAsBoolean(Value: boolean): void;

}
/**
 * 排行榜类
 * 管理游戏中的各种排行榜数据
 * 包括财富榜、等级榜、师父榜、效率榜和各职业排行榜
 */
declare class TToptenz {
	/** 获取财富排行榜 */
	GetRichest(): TNumOrderItems;
	/** 财富排行榜 */
	readonly Richest: TNumOrderItems;
	/** 获取等级排行榜 */
	GetLevels(): TLevelOrderItems;
	/** 等级排行榜 */
	readonly Levels: TLevelOrderItems;
	/** 获取师父排行榜 */
	GetMaster(): TNumOrderItems;
	/** 师父排行榜 */
	readonly Master: TNumOrderItems;
	/** 获取效率排行榜 */
	GetEfficiency(): TNumOrderItems;
	/** 效率排行榜 */
	readonly Efficiency: TNumOrderItems;
	/** 获取战士排行榜 */
	GetWarrior(): TJobOrderItems;
	/** 战士排行榜 */
	readonly Warrior: TJobOrderItems;
	/** 获取法师排行榜 */
	GetWizard(): TJobOrderItems;
	/** 法师排行榜 */
	readonly Wizard: TJobOrderItems;
	/** 获取道士排行榜 */
	GetTaoist(): TJobOrderItems;
	/** 道士排行榜 */
	readonly Taoist: TJobOrderItems;
	/** 获取弓箭手排行榜 */
	GetArcher(): TJobOrderItems;
	/** 弓箭手排行榜 */
	readonly Archer: TJobOrderItems;
	/** 获取刺客排行榜 */
	GetAssassin(): TJobOrderItems;
	/** 刺客排行榜 */
	readonly Assassin: TJobOrderItems;
	/** 获取萨满排行榜 */
	GetShaman(): TJobOrderItems;
	/** 萨满排行榜 */
	readonly Shaman: TJobOrderItems;
	/** 刷新排行榜数据 */
	Refresh(): void;

}
/**
 * 职业排行榜项目类
 * 继承自TOrderItems，专门用于职业排行榜
 * 包含最小值和最大值属性
 */
declare class TJobOrderItems extends TOrderItems {
	/** 获取指定索引的最小值 */
	GetMinValue(AIndex: number): number;
	/** 最小值 */
	readonly MinValue: number;
	/** 获取指定索引的最大值 */
	GetMaxValue(AIndex: number): number;
	/** 最大值 */
	readonly MaxValue: number;

}
/**
 * 等级排行榜项目类
 * 继承自TOrderItems，专门用于等级排行榜
 * 包含转生等级和普通等级属性
 */
declare class TLevelOrderItems extends TOrderItems {
	/** 获取指定索引的转生等级 */
	GetReLevel(AIndex: number): number;
	/** 转生等级 */
	readonly ReLevel: number;
	/** 获取指定索引的等级 */
	GetLevel(AIndex: number): number;
	/** 等级 */
	readonly Level: number;

}
/**
 * 数值排行榜项目类
 * 继承自TOrderItems，用于数值型排行榜
 * 包含数值属性
 */
declare class TNumOrderItems extends TOrderItems {
	/** 获取指定索引的数值 */
	GetValue(AIndex: number): number;
	/** 数值 */
	readonly Value: number;

}
/**
 * 排行榜项目基类
 * 所有排行榜项目的基础类
 * 包含基本的排行榜信息如数量、姓名、职业、性别等
 */
declare class TOrderItems {
	/** 获取排行榜项目数量 */
	GetCount(): number;
	/** 排行榜项目数量 */
	readonly Count: number;
	/** 获取指定索引的姓名 */
	GetName(AIndex: number): string;
	/** 姓名 */
	readonly Name: string;
	/** 获取指定索引的职业 */
	GetJob(AIndex: number): number;
	/** 职业 */
	readonly Job: number;
	/** 获取指定索引的性别 */
	GetGender(AIndex: number): number;
	/** 性别 */
	readonly Gender: number;
	/** 根据姓名查找索引 */
	IndexOf(AName: string): number;

}
/**
 * 快速INI文件类
 * 用于快速读写INI配置文件
 * 支持整数、字符串、布尔值、日期时间等数据类型的读写
 */
declare class TFastIniFile {
	/** 读取整数值 */
	ReadInteger(Sect: string, Name: string, Def: number): number;
	/** 写入整数值 */
	WriteInteger(Sect: string, Name: string, Value: number): void;
	/** 读取字符串值 */
	ReadString(Sect: string, Name: string, Def: string): string;
	/** 写入字符串值 */
	WriteString(Sect: string, Name: string, Value: string): void;
	/** 读取布尔值 */
	ReadBoolean(Sect: string, Name: string, Def: boolean): boolean;
	/** 写入布尔值 */
	WriteBoolean(Sect: string, Name: string, Value: boolean): void;
	/** 检查节是否存在 */
	SectionExists(Sect: string): boolean;
	/** 读取固定日期时间 */
	ReadFixedDateTime(Sect: string, Name: string, Value: number): number;
	/** 更新文件 */
	UpdateFile(): void;
	/** 删除节 */
	EraseSection(Sect: string): void;
	/** 释放资源 */
	Free: () => void;
	/** 获取是否启用行内注释 */
	GetInlineCommentsEnabled(): boolean;
	/** 是否启用行内注释 */
	InlineCommentsEnabled: boolean;
	/** 设置是否启用行内注释 */
	SetInlineCommentsEnabled(Value: boolean): void;
	/** 读取所有节名 */
	ReadSections(AList: TStringList): void;
	/** 获取所有字符串 */
	GetStrings(AList: TStringList): void;
	/** 读取指定节的所有键值对 */
	ReadSectionValues(Name: string, AList: TStringList): void;

}
/**
 * 字符串列表类
 * 用于管理字符串集合的工具类
 * 提供字符串的添加、删除、查找等功能
 */
declare class TStringList {
	GetCount(): number;
	readonly Count: number;
	GetStrings(Index: number): string;
	readonly Strings: string;
	LoadFromFile(AFileName: string): void;
	SaveToFile(AFileName: string): void;
	Delete(Index: number): void;
	Clear(): void;
	IndexOf(Text: string): number;
	Add(Text: string): number;
	Free: () => void;
	SetCommaText(Text: string): void;
	GetCommaText(): string;
	CommaText: string;
	SetDelimiter(Text: string): void;
	GetDelimiter(): string;
	Delimiter: string;
	SetDelimitedText(Text: string): void;
	GetDelimitedText(): string;
	DelimitedText: string;
	Insert(Index: number, Text: string): void;
	GetText(): string;
	Text: string;
	SetText(Text: string): void;
	GetLineBreak(): string;
	LineBreak: string;
	SetLineBreak(Value: string): void;
	SetValues(Index: string, Value: string): void;
	GetValues(Index: string): string;
	Values: string;
	GetNames(Index: number): string;
	GetValueFromIndex(Index: number): string;
	SetValueFromIndex(Index: number, Value: string): void;

}
/**
 * 物品状态类
 * 管理物品的各种状态标志
 * 包括是否可制造、是否记录日志、是否掉落提示等
 */
declare class TItemState {
	/** 获取是否禁止制造 */
	GetDisableMake(): boolean;
	/** 是否禁止制造 */
	DisableMake: boolean;
	/** 设置是否禁止制造 */
	SetDisableMake(Value: boolean): void;
	/** 获取是否写入日志 */
	GetWriteLog(): boolean;
	/** 是否写入日志 */
	WriteLog: boolean;
	/** 设置是否写入日志 */
	SetWriteLog(Value: boolean): void;
	/** 获取是否掉落提示 */
	GetDropHint(): boolean;
	/** 是否掉落提示 */
	DropHint: boolean;
	/** 设置是否掉落提示 */
	SetDropHint(Value: boolean): void;
	/** 获取是否挖肉提示 */
	GetButchHint(): boolean;
	/** 是否挖肉提示 */
	ButchHint: boolean;
	/** 设置是否挖肉提示 */
	SetButchHint(Value: boolean): void;
	/** 获取是否禁止拾取 */
	GetNoPickUp(): boolean;
	/** 是否禁止拾取 */
	NoPickUp: boolean;
	/** 设置是否禁止拾取 */
	SetNoPickUp(Value: boolean): void;
	/** 获取是否宝箱提示 */
	GetBoxHint(): boolean;
	/** 是否宝箱提示 */
	BoxHint: boolean;
	/** 设置是否宝箱提示 */
	SetBoxHint(Value: boolean): void;
	/** 获取是否在客户端显示名称 */
	GetShowNameClient(): boolean;
	/** 是否在客户端显示名称 */
	ShowNameClient: boolean;
	/** 设置是否在客户端显示名称 */
	SetShowNameClient(Value: boolean): void;
	/** 获取是否特殊显示 */
	GetSpecialShow(): boolean;
	/** 是否特殊显示 */
	SpecialShow: boolean;
	/** 设置是否特殊显示 */
	SetSpecialShow(Value: boolean): void;
	/** 获取是否自动拾取 */
	GetAutoPickUp(): boolean;
	/** 是否自动拾取 */
	AutoPickUp: boolean;
	/** 设置是否自动拾取 */
	SetAutoPickUp(Value: boolean): void;
	/** 获取是否永不掉落 */
	GetNerverDrop(): boolean;
	/** 是否永不掉落 */
	NerverDrop: boolean;
	/** 设置是否永不掉落 */
	SetNerverDrop(Value: boolean): void;
	/** 获取是否绑定 */
	GetBind(): boolean;
	/** 是否绑定 */
	Bind: boolean;
	/** 设置是否绑定 */
	SetBind(Value: boolean): void;
	/** 获取是否禁止修理 */
	GetNoRepair(): boolean;
	/** 是否禁止修理 */
	NoRepair: boolean;
	/** 设置是否禁止修理 */
	SetNoRepair(Value: boolean): void;
	/** 获取是否禁止存储 */
	GetNoStore(): boolean;
	/** 是否禁止存储 */
	NoStore: boolean;
	/** 设置是否禁止存储 */
	SetNoStore(Value: boolean): void;
	/** 获取是否下线释放 */
	GetOfflineFree(): boolean;
	/** 是否下线释放 */
	OfflineFree: boolean;
	/** 设置是否下线释放 */
	SetOfflineFree(Value: boolean): void;
	/** 获取是否禁止掉落 */
	GetNoDrop(): boolean;
	/** 是否禁止掉落 */
	NoDrop: boolean;
	/** 设置是否禁止掉落 */
	SetNoDrop(Value: boolean): void;
	/** 获取是否死亡释放 */
	GetDeathFree(): boolean;
	/** 是否死亡释放 */
	DeathFree: boolean;
	/** 设置是否死亡释放 */
	SetDeathFree(Value: boolean): void;
	/** 获取是否死亡掉落 */
	GetDeathDrop(): boolean;
	/** 是否死亡掉落 */
	DeathDrop: boolean;
	/** 设置是否死亡掉落 */
	SetDeathDrop(Value: boolean): void;
	/** 获取是否禁止脱下 */
	GetNoTakeOff(): boolean;
	/** 是否禁止脱下 */
	NoTakeOff: boolean;
	/** 设置是否禁止脱下 */
	SetNoTakeOff(Value: boolean): void;
	/** 获取是否穿戴后自动绑定 */
	GetAutoBindAfterTakeOn(): boolean;
	/** 是否穿戴后自动绑定 */
	AutoBindAfterTakeOn: boolean;
	/** 设置是否穿戴后自动绑定 */
	SetAutoBindAfterTakeOn(Value: boolean): void;
	/** 获取是否怪物掉落时调用方法 */
	GetCallMethodOnMonDrop(): boolean;
	/** 是否怪物掉落时调用方法 */
	CallMethodOnMonDrop: boolean;
	/** 设置是否怪物掉落时调用方法 */
	SetCallMethodOnMonDrop(Value: boolean): void;
	/** 获取是否玩家掉落时调用方法 */
	GetCallMethodOnPlayerDrop(): boolean;
	/** 是否玩家掉落时调用方法 */
	CallMethodOnPlayerDrop: boolean;
	/** 设置是否玩家掉落时调用方法 */
	SetCallMethodOnPlayerDrop(Value: boolean): void;
	/** 获取是否挖肉时调用方法 */
	GetCallMethodOnButch(): boolean;
	/** 是否挖肉时调用方法 */
	CallMethodOnButch: boolean;
	/** 设置是否挖肉时调用方法 */
	SetCallMethodOnButch(Value: boolean): void;
	/** 获取是否拾取时调用方法 */
	GetCallMethodOnPickUp(): boolean;
	/** 是否拾取时调用方法 */
	CallMethodOnPickUp: boolean;
	/** 设置是否拾取时调用方法 */
	SetCallMethodOnPickUp(Value: boolean): void;
	/** 获取是否可放入快捷栏 */
	GetCanInQuickBar(): boolean;
	/** 是否可放入快捷栏 */
	CanInQuickBar: boolean;
	/** 设置是否可放入快捷栏 */
	SetCanInQuickBar(Value: boolean): void;
	/** 获取是否可放入首饰盒 */
	GetCanInJewelryBox(): boolean;
	/** 是否可放入首饰盒 */
	CanInJewelryBox: boolean;
	/** 设置是否可放入首饰盒 */
	SetCanInJewelryBox(Value: boolean): void;

}
/**
 * 角色列表类
 * 用于管理角色对象的集合
 * 提供角色的添加、删除、查找等功能
 */
declare class TActorList {
	/** 获取角色数量 */
	GetCount(): number;
	/** 角色数量 */
	readonly Count: number;
	/** 根据索引获取角色 */
	Actor(index: number): TActor;
	/** 添加角色 */
	Add(Item: TActor): number;
	/** 删除指定索引的角色 */
	Delete(Index: number): void;
	/** 释放资源 */
	Free: () => void;

}
/**
 * 通用列表类
 * 用于管理对象集合的基础类
 * 提供基本的列表操作功能
 */
declare class TList {
	/** 获取项目数量 */
	GetCount(): number;
	/** 项目数量 */
	readonly Count: number;
	/** 根据索引获取项目 */
	Items(index: number): Object;

}
/**
 * 日期时间工具类
 * 提供日期时间相关的各种操作函数
 * 包括日期计算、格式化、转换等功能
 */
declare class TDateUtils {
	/** 获取小时内的分钟数 */
	MinuteOfTheHour(DateTime: number): number;
	/** 计算两个时间之间的秒数差 */
	SecondSpan(TimeA: number, TimeB: number): number;
	/** 计算两个时间之间的毫秒数差 */
	MilliSecondSpan(TimeA: number, TimeB: number): number;
	/** 字符串转日期时间（带默认值） */
	StrToDateTimeDef(format: string, Time: number): number;
	/** 计算两个日期之间的天数差 */
	DaysBetween(TimeA: number, TimeB: number): number;
	/** 计算两个时间之间的分钟数差 */
	MinutesBetween(TimeA: number, TimeB: number): number;
	/** 计算两个时间之间的小时数差 */
	HoursBetween(TimeA: number, TimeB: number): number;
	/** 计算两个时间之间的毫秒数差 */
	MilliSecondsBetween(TimeA: number, TimeB: number): number;
	/** 解码日期时间为时间定义结构 */
	DecodeDateTime: (DateTime: number) => TimeDef;
	/** 编码日期时间 */
	EncodeDateTime(Y: number, M: number, D: number, H: number, N: number, S: number, MS: number): number;
	/** 日期时间转字符串 */
	DateTimeToStr(Time: number): string;
	/** 获取当前时间 */
	Now(): number;
	/** 增加天数 */
	IncDay(Time: number, ANumberOfDays: number): number;
	/** 增加小时数 */
	IncHour(Time: number, ANumberOfHour: number): number;
	/** 增加分钟数 */
	IncMinute(Time: number, ANumberOfMinute: number): number;
	/** 计算两个时间之间的秒数差 */
	SecondsBetween(TimeA: number, TimeB: number): number;
	/** 增加秒数 */
	IncSecond(Time: number, ANumberOfSec: number): number;
	/** 日期时间转文件日期 */
	DateTimeToFileDate(Time: number): number;
	/** 获取一周中的第几天 */
	DayOfTheWeek(Time: number): number;
	/** 获取星期几 */
	DayOfWeek(Time: number): number;
	/** 格式化日期时间 */
	FormatDateTime(FormatStr: string, Time: number): string;
	/** 字符串转日期时间 */
	StrToDateTime(TimeStr: string): number;
	/** 文件日期转日期时间 */
	FileDateToDateTime(FileDateTime: number): number;
	/** 日期时间转时间戳 */
	DateTimeToTimeStamp(Time: number): TTimeStamp;
	/** 释放时间戳 */
	FreeTimeStamp(Time: TTimeStamp): void;
	/** 获取月初时间 */
	StartOfTheMonth(Time: number): number;
	/** 获取指定年月的天数 */
	DaysInAMonth(Year: number, Month: number): number;
	/** Unix时间转日期时间 */
	UnixTimeToDateTime(UnixTime: number, AReturnUtc: boolean): number;
	/** 日期时间转Unix时间 */
	DateTimeToUnixTime(AValue: number, AInputIsUTC: boolean): number;
	/** 获取毫秒部分 */
	MilliSecondOf(AValue: number): number;
	/** 获取分钟部分 */
	MinuteOf(AValue: number): number;
	/** 获取秒部分 */
	SecondOf(AValue: number): number;
	/** 获取小时部分 */
	HourOf(AValue: number): number;
	/** 获取日期部分 */
	DayOf(AValue: number): number;
	/** 获取周数 */
	WeekOf(AValue: number): number;
	/** 获取月份部分 */
	MonthOf(AValue: number): number;
	/** 获取年份部分 */
	YearOf(AValue: number): number;

}
/**
 * 文件流类
 * 用于文件的读写操作
 * 提供二进制和文本数据的读写功能
 */
declare class TFileStream {
	/** 写入ANSI字符串 */
	WriteStrAnsi(Str: string): void;
	/** 写入缓冲区数据 */
	WriteBuffer(PBuffer: Object, Size: number): void;
	/** 读取缓冲区数据 */
	ReadBuffer(PBuffer: Object, Size: number): void;
	/** 获取文件大小 */
	GetSize(): number;
	/** 文件大小 */
	Size: number;
	/** 设置文件大小 */
	SetSize(Value: number): void;
	/** 获取当前位置 */
	GetPosition(): number;
	/** 当前位置 */
	Position: number;
	/** 设置当前位置 */
	SetPosition(Value: number): void;
	/** 释放资源 */
	Free(): void;

}
/**
 * 魔法类
 * 用于管理魔法技能的相关信息
 * 包含魔法消耗和默认魔法等属性
 */
declare class TMagic {
	/** 获取魔法消耗 */
	GetwSpell(): number;
	/** 魔法消耗 */
	readonly wSpell: number;
	/** 获取默认魔法 */
	GetbtDefSpell(): number;
	/** 默认魔法 */
	readonly btDefSpell: number;

}
/**
 * 时间戳类
 * 用于表示时间戳信息
 * 包含时间和日期部分
 */
declare class TTimeStamp {
	/** 获取时间部分 */
	GetTime(): number;
	/** 时间部分 */
	Time: number;
	/** 设置时间部分 */
	SetTime(Value: number): void;
	/** 获取日期部分 */
	GetDate(): number;
	/** 日期部分 */
	Date: number;
	/** 设置日期部分 */
	SetDate(Value: number): void;

}
/**
 * 数据库引擎类
 * 提供数据库操作的核心功能
 * 支持异步查询和执行 SQL 语句
 */
declare class TDBEngine {
	/**
	 * 执行 SQL 语句（同步）
	 * @param Name - 数据库连接名称
	 * @param SQLText - 要执行的 SQL 语句文本
	 * @returns 受影响的行数
	 */
	ExecSQL(Name: string, SQLText: string): number;

	/**
	 * 执行查询操作（同步）
	 * @param Name - 数据库连接名称
	 * @param SQLText - 查询的 SQL 语句文本
	 * @returns 查询结果数据集
	 */
	Query(Name: string, SQLText: string): TDataSet;

	/**
	 * 异步执行查询操作
	 * @param Ident - 异步操作标识符
	 * @param Name - 数据库连接名称
	 * @param SQLText - 查询的 SQL 语句文本
	 */
	QueryAsync(Ident: string, Name: string, SQLText: string): void;

	/**
	 * 异步执行 SQL 语句
	 * @param Ident - 异步操作标识符
	 * @param Name - 数据库连接名称
	 * @param SQLText - 要执行的 SQL 语句文本
	 */
	ExecAsync(Ident: string, Name: string, SQLText: string): void;

	/**
	 * 获取查询结果值列表
	 * @param Name - 数据库连接名称
	 * @param SQLText - 查询的 SQL 语句文本
	 * @returns 查询结果值列表
	 */
	ValueList(Name: string, SQLText: string): TStringList;

	/**
	 * 开始数据库事务
	 * @param Name - 数据库连接名称
	 */
	BeginTran(Name: string): void;

	/**
	 * 提交数据库事务
	 * @param Name - 数据库连接名称
	 */
	CommitTran(Name: string): void;

	/**
	 * 回滚数据库事务
	 * @param Name - 数据库连接名称
	 */
	RollbackTran(Name: string): void;

	/**
	 * 添加数据库连接
	 * @param Name - 数据库连接名称
	 * @param DBServer - 数据库服务器地址
	 * @param DBPort - 数据库端口号
	 * @param DBUser - 数据库用户名
	 * @param DBPassword - 数据库密码
	 * @param DataBase - 要连接的数据库名称
	 * @returns 添加连接是否成功
	 */
	AddConection(
		Name: string,
		DBServer: string,
		DBPort: number,
		DBUser: string,
		DBPassword: string,
		DataBase: string
	): boolean;

	/**
	 * 扩展的异步查询方法
	 * @param name - 数据库连接名称
	 * @param sql - 查询的 SQL 语句文本
	 * @param cb - 查询结果回调函数
	 */
	QueryAsyncEx: (name: string, sql: string, cb: QueryDBAsyncResult) => void;

	/**
	 * 扩展的异步执行 SQL 语句方法
	 * @param name - 数据库连接名称
	 * @param sql - 要执行的 SQL 语句文本
	 * @param cb - 执行结果回调函数
	 */
	ExecAsyncEx: (name: string, sql: string, cb: ExecDBAsyncResult) => void;
}
/**
 * 数据集类
 * 用于存储和操作数据库查询结果
 * 提供记录遍历、字段访问等功能
 */
declare class TDataSet {
	/** 打开数据集 */
	Open(): void;
	/** 检查是否为空 */
	IsEmpty(): boolean;
	/** 检查是否到达末尾 */
	Eof(): boolean;
	/** 移动到下一条记录 */
	Next(): void;
	/** 根据字段名获取字段 */
	FieldByName(Name: string): TField;
	/** 获取记录数量 */
	GetRecordCount(): number;
	/** 记录数量 */
	readonly RecordCount: number;
	/** 释放资源 */
	Free(): void;
	/** 获取字段数量 */
	GetFieldCount(): number;
	/** 字段数量 */
	readonly FieldCount: number;
	/** 根据索引获取字段 */
	GetField(Index: number): TField;

}
/**
 * 数据字段类
 * 用于表示数据集中的字段
 * 提供各种数据类型的访问方法
 */
declare class TField {
	/** 获取字段名称 */
	GetFieldName(): string;
	/** 字段名称 */
	readonly FieldName: string;
	/** 获取字符串值 */
	GetAsString(): string;
	/** 字符串值 */
	readonly AsString: string;
	/** 获取整数值 */
	GetAsInteger(): number;
	/** 整数值 */
	readonly AsInteger: number;
	/** 获取长整数值 */
	GetAsLargeInt(): number;
	/** 长整数值 */
	readonly AsLargeInt: number;
	/** 获取日期时间值 */
	GetAsDateTime(): number;
	/** 日期时间值 */
	readonly AsDateTime: number;
	/** 获取布尔值 */
	GetAsBoolean(): boolean;
	/** 布尔值 */
	readonly AsBoolean: boolean;
	/** 获取浮点数值 */
	GetAsFloat(): number;
	/** 浮点数值 */
	readonly AsFloat: number;
	/** 检查是否为整数类型 */
	IsInt(): boolean;
	/** 检查是否为长整数类型 */
	IsLargeInt(): boolean;
	/** 检查是否为浮点数类型 */
	IsFloat(): boolean;
	/** 获取字段类型 */
	GetFieldType(): number;
	/** 字段类型 */
	readonly FieldType: number;
	/** 获取原始字段类型 */
	GetRawFieldType(): number;
	/** 原始字段类型 */
	readonly RawFieldType: number;
	/** 检查是否为日期时间类型 */
	IsDateTime(): boolean;

}
/**
 * 怪物类
 * 继承自TActor，专门用于怪物对象
 * 包含怪物特有的行为和属性
 */
declare class TMonster extends TActor {
	/** 怪物跑步 */
	Run(): void;
	/** 攻击目标 */
	AttackTarget(): boolean;
	/** 搜索目标 */
	SearchTarget(): void;
	/** 删除目标创建 */
	DelTargetCreat(): void;
	/** 选择目标 */
	SelectTarget(): void;
	/** 初始化怪物 */
	Initialize(): void;
	/** 变成幽灵状态 */
	MakeGhost(): void;
	/** 设置目标创建事件 */
	OnSetTargetCreat(Target: TActor): void;
	/** 删除目标创建事件 */
	OnDelTargetCreat(Target: TActor): void;
	/** 怪物说话 */
	Say(PMessage: string): void;
	/** 检查目标是否在视野范围内 */
	InViewRange(Target: TActor): boolean;
	/** 复活怪物 */
	ReAlive(): void;
	/** 重新计算能力值 */
	RecalcAbilitys(): void;
	/** 怪物死亡 */
	Die(): void;
	/** 读取附加能力 */
	ReadAddedAbility(PAblity: TAddedAbility): void;
	/** 检查是否为保护目标 */
	IsProtectTarget(Target: TActor): boolean;
	/** 检查是否为攻击目标 */
	IsAttackTarget(Target: TActor): boolean;
	/** 检查是否为合适的目标 */
	IsProperTarget(Target: TActor): boolean;
	/** 检查是否为合适的朋友 */
	IsProperFriend(Target: TActor): boolean;
	/** 获取自定义种族 */
	GetCustomRace(): number;
	/** 自定义种族 */
	readonly CustomRace: number;

}
/**
 * 用户物品列表类
 * 用于管理用户的物品集合
 * 提供物品的添加、删除、复制等操作
 */
declare class TUserItemList {
	/** 获取物品但不添加到其他列表（需要复制时） */
	DontAddToOtherListIfWantNeedMakeCopyGet(Index: number): TUserItem;
	/** 复制并添加物品 */
	MakeCopyAndAdd(Item: TUserItem): number;
	/** 删除并释放物品 */
	DeleteAndFreeItem(Index: number): void;
	/** 获取物品数量 */
	GetCount(): number;
	/** 物品数量 */
	readonly Count: number;

}
/**
 * 任务链接项目类
 * 用于管理任务之间的链接关系
 * 包含任务的基本信息和链接属性
 */
declare class TMissionLinkItem {
	/** 获取任务类型 */
	GetKind(): number;
	/** 任务类型 */
	Kind: number;
	/** 获取任务ID */
	GetMisssionID(): string;
	/** 任务ID */
	MisssionID: string;
	/** 获取任务主题 */
	GetSubject(): string;
	/** 任务主题 */
	Subject: string;
	/** 获取任务内容 */
	GetContent(): string;
	/** 任务内容 */
	Content: string;
	/** 获取等级要求 */
	GetLevel(): number;
	/** 等级要求 */
	Level: number;
	/** 获取转生等级要求 */
	GetReLevel(): number;
	/** 转生等级要求 */
	ReLevel: number;
	/** 获取目标NPC */
	GetTargetNpc(): number;
	/** 目标NPC */
	TargetNpc: number;
	/** 设置任务类型 */
	SetKind(Value: number): void;
	/** 设置任务ID */
	SetMisssionID(Value: string): void;
	/** 设置任务主题 */
	SetSubject(Value: string): void;
	/** 设置任务内容 */
	SetContent(Value: string): void;
	/** 设置等级要求 */
	SetLevel(Value: number): void;
	/** 设置转生等级要求 */
	SetReLevel(Value: number): void;
	/** 设置目标NPC */
	SetTargetNpc(Value: number): void;
	/** 删除任务链接项目 */
	Delete(): void;

}
/**
 * 项目UI管理类
 * 用于管理游戏的管理界面
 * 提供页面、按钮、复选框、编辑框等控件的管理功能
 */
declare class TProjectUIAdmin {
	/** 添加页面 */
	AddPage(PageName: string, CWidth: number, CHeight: number, CRowCount: number): void;
	/** 添加按钮控件 */
	AddButton: (PageName: string, ControlName: string, Hint?: string, confirm?: boolean) => void;
	/** 添加复选框控件 */
	AddCheckBox: (PageName: string, ControlName: string, Checked: boolean, Hint?: string) => void;
	/** 添加编辑框控件 */
	AddEdit: (PageName: string, ControlName: string, Text: string, Hint?: string, confirm?: boolean) => void;
	/** 添加日志页面 */
	AddLogPage(PageName: string): void;
	/** 添加日志内容 */
	AddLog(PageName: string, LogText: string): void;
	/** 更新输入文本 */
	UpdateInputText(ControlName: string, LogText: string): void;
	/** 更新复选框状态 */
	UpdateCheckBoxState(ControlName: string, Checked: boolean): void;
	/** 清空日志页面 */
	ClearLogPage(PageName: string): void;

}
/**
 * 只读用户物品列表类
 * 用于只读访问用户物品集合
 * 提供物品的只读访问功能
 */
declare class TUserItemListReadOnly {
	/** 根据索引获取物品 */
	GetItem(Index: number): TUserItem;
	/** 获取物品数量 */
	GetCount(): number;
	/** 物品数量 */
	readonly Count: number;

}
/**
 * 地图物品类
 * 用于表示地图上的物品
 * 包含物品的位置、类型、数量等信息
 */
declare class TMapItem {
	/** 获取物品名称 */
	GetName(): string;
	/** 物品名称 */
	readonly Name: string;
	/** 获取用户物品 */
	GetUserItem(): TUserItem;
	/** 用户物品 */
	readonly UserItem: TUserItem;
	/** 获取货币类型 */
	GetMoneyType(): number;
	/** 货币类型 */
	readonly MoneyType: number;
	/** 获取地图X坐标 */
	GetMapX(): number;
	/** 地图X坐标 */
	readonly MapX: number;
	/** 获取地图Y坐标 */
	GetMapY(): number;
	/** 地图Y坐标 */
	readonly MapY: number;
	/** 获取物品数量 */
	GetCount(): number;
	/** 物品数量 */
	readonly Count: number;

}
/**
 * 移动平台类
 * 用于管理移动端的功能布局
 * 提供移动端功能按钮的管理功能
 */
declare class TMobilePlatform {
	/** 添加功能按钮 */
	AddFunctionButton(Player: TPlayObject, FunctionTag: number, IconFile: string, ScriptFlag: string, ShowDock: boolean): void;
	/** 删除功能按钮 */
	DelFunctionButton(Player: TPlayObject, FunctionTag: number): void;
	/** 设置功能布局 */
	SetFunctionLayout: (Player: TPlayObject, Layouts: IMobileFunctionButton[]) => void;
	/** 检查是否为移动端客户端 */
	IsMobileClient(Player: TPlayObject): boolean;
}
/** 游戏核心对象 - 传奇游戏引擎的主要接口 */
declare const GameLib: TM2Core;
/** 日期时间工具对象 - 提供日期时间相关的操作函数 */
declare const DateUtils: TDateUtils;
/** 移动平台对象 - 提供移动端功能管理 */
declare const MobilePlatform: TMobilePlatform;

