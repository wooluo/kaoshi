const questions = [
    {
        "question": "关于道德与法律，正确的说法是（D）。",
        "options": [
            "A.在法律健全完善的社会，不需要道德办事公道",
            "B.由于道德不具备法律那样的强制性，所以道德的社会功用不如法律",
            "C.在人类历史上，道德与法律同时产生",
            "D.在一定条件下，道德与法律能够相互作用、相互转化"
        ],
        "answer": "D",
        "hint": "道德与法律在一定条件下可以相互作用和转化，这是它们之间关系的重要方面。"
    },
    {
        "question": "《公民道德建设实施纲要》指出我国职业道德建设规范是（B）。",
        "options": [
            "A.求真务实、开拓创新、艰苦奋斗、服务人民、促进发展",
            "B.爱岗敬业、诚实守信、办事公道、服务群众、奉献社会",
            "C.以人为本、解放思想、实事求是、与时俱进、促进和谐",
            "D.文明礼貌、勤俭节约、团结互助、遵纪守法、开拓创新"
        ],
        "answer": "B",
        "hint": "《公民道德建设实施纲要》提出的职业道德规范强调了爱岗敬业和诚实守信等原则。"
    },
    {
        "question": "关于道德评价，正确的说法是（D）。",
        "options": [
            "A.每个人都能对他人进行道德评价，但不能做自我道德评价",
            "B.道德评价是一种纯粹的主观判断，没有客观依据和标准",
            "C.领导的道德评价具有权威性",
            "D.对一种行为进行道德评价，关键看其是否符合社会道德规范"
        ],
        "answer": "D",
        "hint": "道德评价主要看行为是否符合社会道德规范，而不是个人主观判断。"
    },
    {
        "question": "《公民道德建设实施纲要》中明确提出并大力提倡的职业道德的五个要求是（B）。",
        "options": [
            "A.爱国守法、明礼诚信、团结友善、勤俭自强、敬业奉献",
            "B.爱岗敬业、诚实守信、办事公道、服务群众、奉献社会",
            "C.尊老爱幼、反对迷信、不随地吐痰、不乱扔垃圾",
            "D.爱祖国、爱人民、爱劳动、爱科学、爱社会主义"
        ],
        "answer": "B",
        "hint": "这五个要求是《公民道德建设实施纲要》中提倡的职业道德核心内容。"
    },
    {
        "question": "从我国历史和国情出发，社会主义职业道德建设要坚持的最根本的原则是（D）。",
        "options": [
            "A.人道主义",
            "B.爱国主义",
            "C.社会主义",
            "D.集体主义"
        ],
        "answer": "D",
        "hint": "集体主义是社会主义职业道德建设的根本原则，符合我国的历史和国情。"
    },
    {
        "question": "第一台电子计算机是1946年在美国研制的，该机的英文缩写名是（A）。",
        "options": [
            "A.ENIAC",
            "B.EDVAC",
            "C.EDSAC",
            "D.MARK-II"
        ],
        "answer": "A",
        "hint": "ENIAC是世界上第一台通用电子数字计算机的名称。"
    },
    {
        "question": "计算机的中央处理器CPU包括运算器和（C）两部分。",
        "options": [
            "A.存储器",
            "B.寄存器",
            "C.控制器",
            "D.译码器"
        ],
        "answer": "C",
        "hint": "CPU主要由运算器和控制器两大部分组成，负责执行程序中的指令。"
    },
    {
        "question": "计算机中对数据进行加工与处理的部件，通常称为（A）。",
        "options": [
            "A.运算器",
            "B.控制器",
            "C.显示器",
            "D.存储器软件"
        ],
        "answer": "A",
        "hint": "运算器是计算机中负责执行算术和逻辑运算的部件。"
    },
    {
        "question": "用MIPS为单位来衡量计算机的性能，它指的是计算机的（B），指的是每秒处理的百万级的机器语言指令数。",
        "options": [
            "A.传输速率",
            "B.运算速度",
            "C.字长",
            "D.存储器容量"
        ],
        "answer": "B",
        "hint": "MIPS是衡量计算机运算速度的一个单位，代表每秒百万指令数。"
    },
    {
        "question": "CGA、EGA和VGA标志着（C）的不同规格和性能。",
        "options": [
            "A.打印机",
            "B.存储器",
            "C.显示器",
            "D.硬盘"
        ],
        "answer": "C",
        "hint": "CGA、EGA和VGA是不同时代的显示标准，代表了显示器的技术规格和性能。"
    },
    {
        "question": "人们把以（A）为硬件基本部件的计算机称为第四代计算机。",
        "options": [
            "A.大规模和超大规模集成电路",
            "B.ROM和RAM",
            "C.小规模集成电路",
            "D.磁带与磁盘"
        ],
        "answer": "A",
        "hint": "第四代计算机的特点是以大规模和超大规模集成电路作为主要硬件。"
    },
    {
        "question": "下列有关存储器读写速度的排列，正确的是（B）。",
        "options": [
            "A.RAM\u003eCache\u003e硬盘",
            "B.Cache\u003eRAM\u003e硬盘",
            "C.Cache\u003e硬盘\u003eRAM",
            "D.RAM\u003e硬盘\u003eCache"
        ],
        "answer": "B",
        "hint": "在存储器的层级结构中，Cache的速度通常比RAM快，RAM又比硬盘快。"
    },
    {
        "question": "一台微机的型号中含有486、586等内容时，其含义是（A）。",
        "options": [
            "A.运算控制单元的档次",
            "B.软盘容量大小",
            "C.主存储器容量大小",
            "D.硬盘容量大小"
        ],
        "answer": "A",
        "hint": "486和586通常指的是CPU的型号或性能等级，与运算控制单元有关。"
    },
    {
        "question": "在现场不关闭电子设备的情况下直接分析和提取电子系统中的数据属于（B）。",
        "options": [
            "A.收集证据",
            "B.提取固定易丢失数据",
            "C.电子证据检查",
            "D.在线分析"
        ],
        "answer": "B",
        "hint": "在现场直接分析和提取数据通常是为了固定那些可能会丢失的关键数据。"
    },
    {
        "question": "易丢失数据提取和在线分析，不得将生成、提取的数据存储在原始存储介质中；无特殊原因需要，不得在目标系统中安装新的应用程序。安装新的应用程序的，应当在（A）中记录安装的程序及目的。",
        "options": [
            "A.现场勘验检查笔录",
            "B.固定电子证据清单",
            "C.勘验检查照片记录表",
            "D.封存电子证据清单"
        ],
        "answer": "A",
        "hint": "现场勘验检查笔录是记录此类操作的正式文档，确保取证过程的透明性和可追溯性。"
    },
    {
        "question": "安卓手机系统APP的存放目录是（A）。",
        "options": [
            "A./system/app",
            "B./data/app",
            "C./data/data",
            "D./data/system"
        ],
        "answer": "A",
        "hint": "/system/app是安卓系统中存放系统应用程序的地方。"
    },
    {
        "question": "安卓手机用户APP存放目录是（C）。",
        "options": [
            "A./system/app",
            "B./data/app",
            "C./data/data",
            "D./data/system"
        ],
        "answer": "C",
        "hint": "/data/data目录通常用于存放用户安装的应用程序的数据。"
    },
    {
        "question": "安卓手机屏幕锁密钥文件存放在（A）。",
        "options": [
            "A./system/app",
            "B./data/app",
            "C./data/data",
            "D./data/system"
        ],
        "answer": "A",
        "hint": "屏幕锁密钥文件是系统级别的文件，通常存放在/system/app目录下。"
    },
    {
        "question": "苹果手机通讯录的数据库名字是（A）。",
        "options": [
            "A.AddressBook.sqlitedb",
            "B.Calendar.sqlitedb",
            "C.Photos.sqlite",
            "D.consolidated.db"
        ],
        "answer": "A",
        "hint": "苹果手机通讯录通常存储在AddressBooC.sqlitedb这个数据库文件中。"
    },
    {
        "question": "远程登录日志一般保存在下列（A）类型的日志中。",
        "options": [
            "A.系统日志",
            "B.安全日志",
            "C.应用程序日志",
            "D.网络日志"
        ],
        "answer": "A",
        "hint": "系统日志通常包含系统级别的事件，包括远程登录尝试和成功登录的信息。"
    },
    {
        "question": "下列（C）文件是iOS应用的安装文件。",
        "options": [
            "A.test.exe",
            "B.test.apk",
            "C.test.ipa",
            "D.test.jg"
        ],
        "answer": "C",
        "hint": "iOS应用的安装文件通常以.ipa为扩展名，这是苹果官方的应用打包格式。"
    },
    {
        "question": "远程勘验时应当由至少几名侦查人员进行（B）。",
        "options": [
            "A.1",
            "B.2",
            "C.3",
            "D.4"
        ],
        "answer": "B",
        "hint": "至少需要两名侦查人员进行远程勘验，以确保过程的合法性和证据的有效性。"
    },
    {
        "question": "易丢失数据提取和在线分析，不得将生成、提取的数据存储在原始存储介质中；无特殊原因需要，不得在目标系统中安装新的应用程序。安装新的应用程序的，应当在（A）中记录安装的程序及目的。",
        "options": [
            "A.现场勘验检查笔录",
            "B.固定电子证据清单",
            "C.勘验检查照片记录表",
            "D.封存电子证据清单"
        ],
        "answer": "A",
        "hint": "现场勘验检查笔录是记录此类操作的正式文档，确保取证过程的透明性和可追溯性。"
    },
    {
        "question": "以下在计算机取证痕迹分析中不能提取的是（D）。",
        "options": [
            "A.USB插拔记录",
            "B.最近访问记录（快捷方式）",
            "C.缩略图信息",
            "D.微信聊天记录删除记录"
        ],
        "answer": "D",
        "hint": "微信聊天记录一旦删除，在计算机取证中通常无法恢复，因为它可能已经被覆盖。"
    },
    {
        "question": "以下说法正确的是（C）。",
        "options": [
            "A.电子证据是指由电子信息技术应用而出现的各种能够证明案件真实情况的文件",
            "B.经检验鉴定确定的电子证据应当直接导出到本地进行备份",
            "C.无法复制的电子证据，可通过截取屏幕图像、拍照、录像、打印等方式固定提取",
            "D.检验鉴定文书正本和附件材料交委托单位，副本由鉴定机构存档备查"
        ],
        "answer": "C",
        "hint": "无法复制的电子证据，可通过截取屏幕图像、拍照、录像、打印等方式固定提取。"
    },
    {
        "question": "HTTPS握手过程中，以下不属于客户端验证证书合法性的是（A）。",
        "options": [
            "A.使用对称加密方式key进行信息交流",
            "B.非对称加密方式key进行交流",
            "C.通过校验证书颁发机构是否受客户端信任",
            "D.验证请求是否得到响应"
        ],
        "answer": "A",
        "hint": "HTTPS握手过程中，客户端主要通过非对称加密来验证服务器的证书合法性。"
    },
    {
        "question": "linux操作系统中权限最大的账户是（D）。",
        "options": [
            "A.admin",
            "B.super",
            "C.administrator",
            "D.root"
        ],
        "answer": "D",
        "hint": "root账户是Linux系统中权限最大的账户，拥有对系统的所有访问和操作权限。"
    },
    {
        "question": "在redhatlinux系统中，下列哪个命令可以用来激活服务的不同运行级别（D）。",
        "options": [
            "A.active",
            "B.make",
            "C.turn",
            "D.chkconfig"
        ],
        "answer": "D",
        "hint": "chkconfig命令在RedHatLinux系统中用于管理服务在不同运行级别的启动状态。"
    },
    {
        "question": "在TCP/IP体系结构中，直接为ICMP提供服务的协议是（B）。",
        "options": [
            "A.PPP",
            "B.IP",
            "C.UDP",
            "D.TCP"
        ],
        "answer": "B",
        "hint": "ICMP（Internet控制报文协议）是IP协议的一部分，用于在IP主机、路由器之间传递控制消息。"
    },
    {
        "question": "计算机网络按威胁对象大体可分为两种：一是对网络中信息的威胁；二是（B）。",
        "options": [
            "A.人为破坏",
            "B.对网络中设备的威胁",
            "C.病毒威胁",
            "D.对网络人员的威胁"
        ],
        "answer": "B",
        "hint": "除了对信息的威胁，计算机网络还面临着对网络设备本身的威胁，如硬件损坏或服务中断。"
    },
    {
        "question": "下面哪个类型的rootkit是调用系统级函数来隐藏自己（B）。",
        "options": [
            "A.应用层",
            "B.内核层",
            "C.运行库层",
            "D.系统层"
        ],
        "answer": "B",
        "hint": "内核层Rootkit通过修改或绕过操作系统的内核来获得最高权限，并隐藏其存在。"
    },
    {
        "question": "哪个键唯一地标识表组中的行（C）。",
        "options": [
            "A.外键",
            "B.本地键",
            "C.主键",
            "D.超键"
        ],
        "answer": "C",
        "hint": "主键是数据库表中用来唯一标识每一行的一个或多个字段。"
    },
    {
        "question": "oracle10g中的默认用户中权限最高的是（A）。",
        "options": [
            "A.sys",
            "B.system",
            "C.sysman",
            "D.internal"
        ],
        "answer": "A",
        "hint": "在Oracle数据库中，sys用户通常是权限最高的用户，拥有对整个数据库的完全访问权限。"
    },
    {
        "question": "中间件未出现过以下哪个漏洞（D）。",
        "options": [
            "A.命令执行",
            "B.文件解析",
            "C.反序列化",
            "D.序列化"
        ],
        "answer": "D",
        "hint": "序列化本身不是漏洞，而是一种将对象状态转换为可存储或传输格式的技术。"
    },
    {
        "question": "下面关于SUID权限的描述错误的是（A）。",
        "options": [
            "A.SUID权限仅对任意文件有效",
            "B.执行者对于该文件具有x的权限",
            "C.本权限仅在执行该文件的过程中有效",
            "D.执行者将具有该文件拥有者的权限"
        ],
        "answer": "A",
        "hint": "SUID（SetUserIDuponexecution）权限主要用于可执行文件，而不是任意文件。"
    },
    {
        "question": "用于查看/var/log/wtmp日志的命令是（A）。",
        "options": [
            "A.last",
            "B.lastlog",
            "C.lastwtmp",
            "D.lastmp"
        ],
        "answer": "A",
        "hint": "last命令在Unix和类Unix系统中用于显示用户的登录历史，它读取/var/log/wtmp文件。"
    },
        {
        "question": "关于Windows系统的日志审核功能，错误的说法是（A）。",
        "options": [
            "A.启用进程审核，一般会产生大量的审核日志",
            "B.启用审核对象访问，可以用来检测对重要文件或目录的访问",
            "C.如果启用了“无法记录安全审核则立即关闭系统”这条安全策略，可能会对正常的生产业务产生影响",
            "D.日志文件可以用事件查看器或者记事本来直接查看"
        ],
        "answer": "A",
        "hint": "进程审核并不是Windows日志审核的一部分，通常说的是对象审核、策略审核等。"
    },
    {
        "question": "下列哪一项不是取证准备计划清单中的考虑因素（D）。",
        "options": [
            "A.定义需要数字证据的业务状态",
            "B.确定可用的潜在证据",
            "C.决定安全收集符合要求的FN取证的方式的证据的程序",
            "D.获得组织所有员工的同意"
        ],
        "answer": "D",
        "hint": "取证准备计划主要关注证据的确定、收集和保护，而不是获得所有员工的同意。"
    },
    {
        "question": "假设变量x的值为39，要输出x的值，下列正确的语句是（C）。",
        "options": [
            "A.System.Console.writeline(“x”)",
            "B.System.Console.WriteLine(“x”)",
            "C.System.Console.WriteLine(“x={0}”, x)",
            "D.System.Console.WriteLine(“x={x}”)"
        ],
        "answer": "C",
        "hint": "在C#中，字符串格式化使用{0}作为占位符，并通过相应的参数来替换。"
    },
    {
        "question": "二分查找的时间复杂度是多少（B）。",
        "options": [
            "A.O(N)",
            "B.O(log(N))",
            "C.O(N*log(N))",
            "D.O(N^2)"
        ],
        "answer": "B",
        "hint": "二分查找是一种对数时间复杂度的算法，其复杂度为O(log(N))。"
    },
    {
        "question": "Oracle创建完一个新实例后，会自动创建多个用户，以下不属于Oracle自动创建的用户为（D）。",
        "options": [
            "A.SYS",
            "B.SYSTEM",
            "C.DBA",
            "D.SCOTT"
        ],
        "answer": "D",
        "hint": "Oracle数据库安装后会自动创建SYS、SYSTEM等用户，而SCOTT用户需要手动创建。"
    },
    {
        "question": "在数据库系统中，对存取权限的定义称为（B）。",
        "options": [
            "A.命令",
            "B.授权",
            "C.定义",
            "D.审计"
        ],
        "answer": "B",
        "hint": "授权（Grant）是数据库中用来定义谁可以访问数据和执行操作的过程。"
    },
    {
        "question": "建立会话的角色为（A）。",
        "options": [
            "A.CREATE SESSION",
            "B.CREATE SEQUENCE",
            "C.CREATE CLUSTER",
            "D.CREATE VIEW"
        ],
        "answer": "A",
        "hint": "CREATESESSION是SQL命令，用于在数据库中建立一个新的会话。"
    },
    {
        "question": "有关数据库完整性，下列哪一项没有对它描述（D）。",
        "options": [
            "A.参照完整性",
            "B.实体完整性",
            "C.域完整性",
            "D.用户自定义完整性"
        ],
        "answer": "D",
        "hint": "数据库完整性包括参照完整性、实体完整性和域完整性，用户自定义完整性不是一个标准术语。"
    },
    {
        "question": "设置参照完整性的目的是（D）。",
        "options": [
            "A.定义表的外部联接",
            "B.定义表的临时联接",
            "C.定义表的永久联接",
            "D.在插入、删除、更新时，确保已定义的表间关系"
        ],
        "answer": "D",
        "hint": "参照完整性确保了数据库中表与表之间的链接是有效的，维护数据的准确性。"
    },
    {
        "question": "一个事务的执行，要么全部完成，要么全部不做，一个事务中对数据库的所有操作都是一个不可分割的操作序列的属性是（A）。",
        "options": [
            "A.原子性",
            "B.一致性",
            "C.独立性",
            "D.持久性"
        ],
        "answer": "A",
        "hint": "原子性是事务的基本特征之一，意味着事务中的所有操作要么全部执行，要么全部不执行。"
    },
    {
        "question": "SQL语言中的COMMIT语句的主要作用是（C）。",
        "options": [
            "A.结束程序",
            "B.返回系统",
            "C.提交事务",
            "D.存储数据"
        ],
        "answer": "C",
        "hint": "COMMIT语句用于提交当前事务，使所有的更改永久保存到数据库中。"
    },
    {
        "question": "若系统在运行过程中，由于某种硬件故障，使存储在外存上的数据部分损失或全部损失，这种情况称为（C）。",
        "options": [
            "A.事务故障",
            "B.系统故障",
            "C.介质故障",
            "D.人为错误"
        ],
        "answer": "C",
        "hint": "介质故障指的是存储介质（如硬盘）损坏导致的数据丢失。"
    },
    {
        "question": "在oracle数据库系统中，逻辑备份的命令为（C）。",
        "options": [
            "A.backup",
            "B.log",
            "C.exp",
            "D.imp"
        ],
        "answer": "C",
        "hint": "exp（export）命令在Oracle中用于导出数据库对象，是一种逻辑备份方式。"
    },
    {
        "question": "恢复的主要技术是（C）。",
        "options": [
            "A.事务",
            "B.数据冗余",
            "C.日志文件和数据转储",
            "D.数据转储"
        ],
        "answer": "C",
        "hint": "数据库恢复通常利用日志文件和数据转储来实现数据的恢复到某一状态。"
    },
    {
        "question": "下列不属于数据库恢复策略与方法的是（D）。",
        "options": [
            "A.事务故障的恢复",
            "B.系统故障的恢复",
            "C.介质故障的恢复",
            "D.应用程序故障的恢复"
        ],
        "answer": "D",
        "hint": "数据库恢复策略通常针对事务故障、系统故障和介质故障，不包括应用程序故障。"
    },
    {
        "question": "NFTS系统格式中的文件变为64k主要是因为（A）。",
        "options": [
            "A.MFT表损坏",
            "B.BPB表损坏",
            "C.DBR表损坏",
            "D.MFTMIRR表损坏"
        ],
        "answer": "A",
        "hint": "MFT（MasterFileTable）损坏可能导致文件系统出现问题，包括文件大小显示不正确。"
    },
    {
        "question": "MBR分区架构中，NTFS系统格式单分区从理论上讲可以支持最大容量是多少（A）。",
        "options": [
            "A.2T",
            "B.1T",
            "C.4T",
            "D.8T"
        ],
        "answer": "A",
        "hint": "MBR（MasterBootRecord）分区架构限制了单个分区的最大容量为2TB。"
    },
    {
        "question": "因为分区索引目录丢失的数据应该使用哪种扫描方式恢复数据（A）。",
        "options": [
            "A.使用索引扫描方式",
            "B.使用误格式化扫描方式",
            "C.使用MFT扫描方式",
            "D.使用数据区扫描方式"
        ],
        "answer": "A",
        "hint": "如果分区的索引目录丢失，可以使用索引扫描方式来恢复数据。"
    },
    {
        "question": "jpg图片底层中，缩略图的头部代码是（B）。",
        "options": [
            "A.FFD4",
            "B.FFD8",
            "C.FFD9",
            "D.FFD5"
        ],
        "answer": "B",
        "hint": "在JPEG图像文件中，缩略图通常以FFD8作为起始标记。"
    },
    {
        "question": "U盘中文件包和文件名乱码是（A）。",
        "options": [
            "A.PDT表损坏",
            "B.DBR表损坏",
            "C.BPB表损坏",
            "D.文件内容底层被覆盖"
        ],
        "answer": "A",
        "hint": "PDT（分区表）损坏可能导致文件系统无法正确读取文件名和路径，导致乱码。"
    },
    {
        "question": "一般情况下，一个扇区包含多少字节（D）。",
        "options": [
            "A.509字节",
            "B.510字节",
            "C.511字节",
            "D.512字节"
        ],
        "answer": "D",
        "hint": "一个扇区通常指的是512字节的数据存储单元。"
    },
    {
        "question": "FAT文件格式下，删除的文件头字节改为什么代码标记（A）。",
        "options": [
            "A.E5",
            "B.EF",
            "C.FD",
            "D.80"
        ],
        "answer": "A",
        "hint": "在FAT文件系统中，删除文件时，文件分配表（FAT）中的相应条目会标记为E5。"
    },
    {
        "question": "MBR一般从硬盘哪个扇区开始（C）。",
        "options": [
            "A.63",
            "B.32",
            "C.0",
            "D.1"
        ],
        "answer": "C",
        "hint": "MBR（MasterBootRecord）通常位于硬盘的第一个扇区，即扇区0。"
    },
    {
        "question": "以下不属于在数据恢复中需要使用的软件的是（D）。",
        "options": [
            "A.PC3000",
            "B.FinalData",
            "C.Encase",
            "D.FixRAR"
        ],
        "answer": "D",
        "hint": "FixRAR主要用于修复损坏的RAR压缩文件，而不是数据恢复。"
    },
    {
        "question": "以下不属于计算机取证过程中分析过程的是（B）。",
        "options": [
            "A.协议分析",
            "B.镜像技术",
            "C.数据挖掘",
            "D.过程还原"
        ],
        "answer": "B",
        "hint": "镜像技术是取证过程中用于复制数据的技术，而不是分析过程。"
    },
    {
        "question": "以下关于硬盘的逻辑结构说法不正确的是（C）。",
        "options": [
            "A.每个盘片有两个面，这两个面都是用来存储数据的。",
            "B.随着读写磁头沿着盘片半径方向上下移动，每个盘片被划分成若干个同心圆磁道。",
            "C.磁道被划分成若干个段，每个段称为一个扇区。扇区的编号是按0,1，……顺序进行的。",
            "D.硬盘柱面、磁道、扇区的划分表面上是看不到任何痕迹的。"
        ],
        "answer": "C",
        "hint": "扇区的编号通常是从1开始的，而不是从0开始。"
    },
    {
        "question": "以下不属于数据分析技术的是（D）。",
        "options": [
            "A.对已删除文件的恢复、重建技术",
            "B.关键字搜索技术",
            "C.日志分析",
            "D.特殊类型文件分析"
        ],
        "answer": "D",
        "hint": "特殊类型文件分析是数据分析技术的一部分，不属于不属于数据分析技术。"
    },
    {
        "question": "在大多数黑客案件中，嗅探工具常被用来捕捉通过网络的流量以重建诸如上网和访问网络文件等功能，以下（B）是这类工具。",
        "options": [
            "A.FTK",
            "B.snifferpro",
            "C.QuickViewPlus",
            "D.D.NTI-DOC"
        ],
        "answer": "B",
        "hint": "snifferpro是一个网络嗅探工具，可以捕获网络流量并分析数据。"
    },
    {
        "question": "https: //url.cn/5x3d5Su这个域名是（C）。",
        "options": [
            "A.三级域名",
            "B.IP地址",
            "C.长链接转换后的短链接",
            "D.子域名"
        ],
        "answer": "C",
        "hint": "该链接是长链接经过转换服务转换后的短链接。"
    },
    {
        "question": "分析涉网新型案件涉案APK时，客服的调证的关键信息主要是在哪一步查找的（B）。",
        "options": [
            "A.静态分析",
            "B.动态分析",
            "C.代码分析",
            "D.解压缩分析"
        ],
        "answer": "B",
        "hint": "动态分析可以检测程序在运行时的行为，这对于获取客服等运行时信息很有帮助。"
    },
    {
        "question": "对APK静态分析不包含以下哪些数据（D）。",
        "options": [
            "A.权限列表",
            "B.签名证书",
            "C.打包公司",
            "D.内嵌的收款账号"
        ],
        "answer": "D",
        "hint": "静态分析主要关注APK文件本身的信息，如权限列表、签名证书等，不涉及运行时数据。"
    },
    {
        "question": "关于分发平台以下说法错误的是（A）。",
        "options": [
            "A.分发平台只提供APK下载服务",
            "B.有些分发平台是嫌疑人自己搭建的",
            "C.分发平台源自于APP测试用途",
            "D.对分发平台的服务器进行分析能获取到上传者相关信息"
        ],
        "answer": "A",
        "hint": "分发平台除了提供APK下载服务外，还可以有其他功能，如分析用户行为等。"
    },
    {
        "question": "一般涉案APP中不会有以下哪种信息（D）。",
        "options": [
            "A.网站域名",
            "B.第三方SDK",
            "C.第三方客服",
            "D.嫌疑人姓名"
        ],
        "answer": "D",
        "hint": "为了保护隐私和安全，涉案APP中通常不会包含嫌疑人的真实姓名。"
    },
    {
        "question": "已知手机中安装有QQ应用，以下哪个ADB备份命令不能备份到QQ应用数据（D）。",
        "options": [
            "A.adb backup -apk -shared com.tencent.mobileqq",
            "B.adb backup -noapk -noshared com.tencent.mobileqq",
            "C.adb backup -noapk -shared –all",
            "D.adb backup -apk -shared -system com.tencent.mm"
        ],
        "answer": "D",
        "hint": "该命令只会备份QQ的apk文件，而不会备份共享或系统数据。"
    },
    {
        "question": "安卓APK应用中提取的证书HASH,可以用于（A）。",
        "options": [
            "A.发起调证",
            "B.应用关联",
            "C.进行HASH破解，解密出明文密码",
            "D.在应用里进行用户登录时使用"
        ],
        "answer": "A",
        "hint": "HASH值可以用于发起调证，帮助验证应用的真实性和完整性。"
    },
    {
        "question": "涉网新型案件涉案的裸聊案件中受害人在APP上进行裸聊的视频以及手机通讯录等信息会被受害人保存在哪里（A）。",
        "options": [
            "A.该APP内",
            "B.该APP后台服务器中",
            "C.嫌疑人手机内",
            "D.其他"
        ],
        "answer": "A",
        "hint": "受害人在APP上产生的信息，如视频和通讯录，通常会保存在APP内部。"
    },
    {
        "question": "ECS服务器指的是以下哪种服务器类型（D）。",
        "options": [
            "A.独立服务器",
            "B.VPS",
            "C.虚拟主机",
            "D.云服务器"
        ],
        "answer": "D",
        "hint": "ECS（ElasticComputeService）是指云服务器，提供可伸缩的计算能力。"
    },
    {
        "question": "以下哪种主机不具有独立的操作系统（A）。",
        "options": [
            "A.云虚拟主机",
            "B.独立服务器",
            "C.云主机",
            "D.VPS"
        ],
        "answer": "A",
        "hint": "云虚拟主机通常与其他用户共享操作系统，而不是拥有独立的操作系统。"
    },
    {
        "question": "Windows系统主机开启远程桌面后，默认的服务监听端口为（B）。",
        "options": [
            "A.8080",
            "B.3389",
            "C.22",
            "D.80"
        ],
        "answer": "B",
        "hint": "远程桌面协议（RDP）默认使用3389端口进行通信。"
    },
    {
        "question": "在对CentOS7.0系统的服务器进行远程勘验的时候，以下哪个命令能够确认服务器的当前时间（C）。",
        "options": [
            "A.last",
            "B.time",
            "C.date",
            "D.data"
        ],
        "answer": "C",
        "hint": "date命令在Linux系统中用于显示或设置系统的日期和时间。"
    },
    {
        "question": "Windows2008系统服务器存在webIIS服务，其默认网站的主目录的本地地址一般为（D）。",
        "options": [
            "A.C: \\\\wint",
            "B.C: \\\\wwwroot",
            "C.C: \\\\inetpub",
            "D.C: \\\\inetpub\\\\wwwroot"
        ],
        "answer": "D",
        "hint": "IIS（InternetInformationServices）的默认网站主目录通常位于inetpub/wwwroot。"
    },
    {
        "question": "FTP（文件传输）协议代理服务器默认的端口号为（B）。",
        "options": [
            "A.443",
            "B.21",
            "C.22",
            "D.80"
        ],
        "answer": "B",
        "hint": "FTP协议默认使用21端口进行文件传输。"
    },
    {
        "question": "Windows系统服务器安全日志中记录服务器被远程登录成功的事件ID为（A）。",
        "options": [
            "A.4627",
            "B.4625",
            "C.4624",
            "D.4634"
        ],
        "answer": "A",
        "hint": "事件ID4627表示用户成功登录到服务器，这是安全日志的一部分。"
    },
    {
        "question": "下列不属于数据库的特点的是（C）。",
        "options": [
            "A.数据按一定的数据模型组织，描述和储存",
            "B.可为各种用户共享",
            "C.冗余度较大",
            "D.数据独立性较高"
        ],
        "answer": "C",
        "hint": "数据库的设计旨在减少冗余，提高数据的一致性和完整性。"
    },
    {
        "question": "在创建数据库表时，下列哪个字段表示主键？（B）。",
        "options": [
            "A.UNIQUE",
            "B.PRIMARYKEY",
            "C.FOREIGNKEY",
            "D.MAINKEY"
        ],
        "answer": "B",
        "hint": "PRIMARYKEY是数据库中用于标识表中每行的唯一性的字段。"
    },
    {
        "question": "下列哪些不属于常用的关系型数据库？（D）。",
        "options": [
            "A.Oracle",
            "B.MySQL",
            "C.MariaDB",
            "D.MongoDB"
        ],
        "answer": "D",
        "hint": "MongoDB是一个NoSQL数据库，不属于关系型数据库。"
    },
    {
        "question": "下列哪个表示找出工资表中工资最高的前三名（C）。",
        "options": [
            "A.select rownum, ename, salary fromemp order by salary desc",
            "B.select rownum, ename, salary fromemp order by salary",
            "C.select rownum, ename, salary fromemp order by salarydescl imit 3",
            "D.select rownum, ename, salary fromemp order by salary limit 3"
        ],
        "answer": "C",
        "hint": "使用limit子句可以限制查询结果的数量，这里是限制为工资最高的前三名。"
    },
    {
        "question": "下列哪种方式对识别蜜罐有效？（A）。",
        "options": [
            "A.保护现场和现场勘查",
            "B.分析数据",
            "C.追踪",
            "D.提交结果"
        ],
        "answer": "A",
        "hint": "保护现场和现场勘查有助于收集信息，进而分析和识别蜜罐。"
    },
    {
        "question": "下面不属于内存镜像工具的是（A）。",
        "options": [
            "A.moontools",
            "B.FTKimager",
            "C.DumpIt",
            "D.Volatility"
        ],
        "answer": "A",
        "hint": "moontools并不是一个内存镜像工具，而是一个内存分析工具。"
    },
    {
        "question": "以下哪个不是镜像的格式（D）。",
        "options": [
            "A.DD",
            "B.E01",
            "C.AFF",
            "D.F1"
        ],
        "answer": "D",
        "hint": "DD、E01和AFF都是镜像文件的格式，而F1不是。"
    },
    {
        "question": "Windows日志不包括（D）。",
        "options": [
            "A.系统日志",
            "B.安全日志",
            "C.应用程序日志",
            "D.注册表日志"
        ],
        "answer": "D",
        "hint": "注册表日志不是Windows日志的一部分，而是通过注册表编辑器进行管理和查看。"
    },
    {
        "question": "Android微信朋友圈数据是以（D）格式保存的。",
        "options": [
            "A.文本格式",
            "B.protoBuf",
            "C.plist",
            "D.sqlite数据库"
        ],
        "answer": "D",
        "hint": "微信朋友圈的数据通常存储在SQLite数据库中，这是一种轻量级的数据库。"
    },
    {
        "question": "USB插拔记录在注册表的那个键值下（A）。",
        "options": [
            "A.HKLM\\\\SYSTEM\\\\CurrentControlSet\\\\Enum",
            "B.HKLM\\\\SYSTEM\\\\CurrentControlSet\\\\Control",
            "C.HKLM\\\\SYSTEM\\\\ControlSet001\\\\Enum",
            "D.以上都不是"
        ],
        "answer": "A",
        "hint": "USB设备的插拔记录通常保存在注册表的枚举分支下。"
    },
    {
        "question": "FTP服务默认端口为（B）。",
        "options": [
            "A.20",
            "B.21",
            "C.22",
            "D.23"
        ],
        "answer": "B",
        "hint": "FTP（文件传输协议）默认使用21端口进行通信。"
    },
    {
        "question": "SSH服务默认端口为（C）。",
        "options": [
            "A.20",
            "B.21",
            "C.22",
            "D.23"
        ],
        "answer": "D",
        "hint": "SSH（安全外壳协议）默认使用22端口进行安全通信。"
    },
    {
        "question": "HTTPS服务默认端口为（B）。",
        "options": [
            "A.80",
            "B.443",
            "C.8080",
            "D.8088"
        ],
        "answer": "B",
        "hint": "HTTPS服务通常使用443端口，这是HTTP协议用于安全通信的端口。"
    },
    {
        "question": "RDP服务默认端口为（D）。",
        "options": [
            "A.3380",
            "B.3386",
            "C.3388",
            "D.3389"
        ],
        "answer": "D",
        "hint": "RDP（远程桌面协议）默认使用3389端口进行远程桌面会话。"
    },
    {
        "question": "手机无法与分析机正常连接的原因是（D）。",
        "options": [
            "A.手机驱动问题",
            "B.手机通讯模式问题",
            "C.手机数据线问题",
            "D.以上都是"
        ],
        "answer": "D",
        "hint": "手机无法与分析机正常连接可能由多种原因引起，包括驱动问题、通讯模式问题或数据线问题。"
    },
    {
        "question": "不属于数据库中事务处理的用途是（D）。",
        "options": [
            "A.事务管理",
            "B.数据恢复",
            "C.一致性保护",
            "D.访问控制"
        ],
        "answer": "D",
        "hint": "访问控制虽然对数据库安全至关重要，但它不是事务处理的用途。"
    },
    {
        "question": "安卓设备通过adb备份出的文件的签名是什么。（C）",
        "options": [
            "A.ANDROIDBACKUP",
            "B.ADBBACKUP",
            "C.ANDROIDFILES",
            "D.ADBFILES"
        ],
        "answer": "C",
        "hint": "安卓设备通过adb备份的文件通常带有'ANDROIDBACKUP'签名。"
    },
    {
        "question": "在linux下使用Volatility对内存进行取证分析时，打印arp的命令是（A）。",
        "options": [
            "A.linux_arp",
            "B.arp",
            "C.print_arp",
            "D.show_arp"
        ],
        "answer": "A",
        "hint": "在Linux版本的Volatility中，打印ARP表的命令是'linux_arp'。"
    },
    {
        "question": "grep语法以下哪个参数可以忽略大小写（D）。",
        "options": [
            "A.nocase",
            "B.o",
            "C.n",
            "D.i"
        ],
        "answer": "D",
        "hint": "在grep命令中，'-i'参数用于忽略大小写的搜索。"
    },
    {
        "question": "Linux下MYSQL启动时加载的配置是（B）。",
        "options": [
            "A.mysqD.ini",
            "B.my.cnf",
            "C.my.ini",
            "D.mysqD.cnf"
        ],
        "answer": "B",
        "hint": "MySQL的配置文件通常命名为'my.cnf'，这是启动时加载的配置文件。"
    },
    {
        "question": "安卓手机可以通过多次点击（C）来打开开发者模式。",
        "options": [
            "A.安卓版本",
            "B.EMUI版本",
            "C.版本号",
            "D.IMEI"
        ],
        "answer": "C",
        "hint": "在安卓设备上，通常通过多次点击'版本号'来打开开发者模式。"
    },
    {
        "question": "使用华为手机助手进行数据备份，备份的密码信息存储在以下哪个文件中。（C）",
        "options": [
            "A.datainfo.ini",
            "B.datainfo.dat",
            "C.backupinfo.dat",
            "D.backupinfo.ini"
        ],
        "answer": "C",
        "hint": "华为手机助手备份的数据，包括密码信息，通常存储在'backupinfo.dat'文件中。"
    },
    {
        "question": "在一起赌博案件中，嫌疑人在云服务器中搭建了赌博网站，办案人员对其网站进行分析后发现赌博网站数据库中存储了用户的用户名明文和用户密码的MD5值，请问办案人员通过以下哪种方式不能使用用户信息进行登录。（B）",
        "options": [
            "A.修改网站登录判断源码，使用户任何密码都可以通过判断",
            "B.通过MD5解密算法对数据库中密码MD5值进行解密，然后使用用户名密码进行登录",
            "C.对明文字符串进行MD5加密，然后在数据库中替换原有MD5值",
            "D.使用彩虹表尝试解密MD5，如果解密成功则使用解密后用户名密码进行登录"
        ],
        "answer": "B",
        "hint": "MD5是一种单向加密算法，目前没有有效的解密方法可以反向解密MD5值。"
    },
    {
        "question": "ThinkPhp模块映射配置的配置名是什么（A）。",
        "options": [
            "A.URL_MODULE_MAP",
            "B.MODULE_URL_MAP",
            "C.MODULE_MAP",
            "D.URL_MAP"
        ],
        "answer": "A",
        "hint": "在ThinkPhp框架中，模块映射配置的名称是'URL_MODULE_MAP'。"
    },
    {
        "question": "删除表的数据时，TRUNCATETABLE的结果是什么（A）。",
        "options": [
            "A.表中的数据被删除，然后表也被删除",
            "B.不符合检查约束要求的数据被删除，而符合检查约束要求的数据依然保留",
            "C.数据被删除，表中的约束仍然存在",
            "D.符合检查约束要求的数据被删除，而不符合检查约束要求的数据依然保留"
        ],
        "answer": "C",
        "hint": "TRUNCATETABLE命令用于删除表中的所有行，但保留表结构和其属性、索引等。"
    },
    {
        "question": "通常对安卓手机的取证，可采取备份的方式获取数据，以下哪种方法的备份对手机的数据可能造成破坏？（D）。",
        "options": [
            "A.adb备份",
            "B.自带工具备份",
            "C.第三方工具备份",
            "D.降级备份"
        ],
        "answer": "D",
        "hint": "降级备份涉及将系统或应用的数据备份到旧版本，这可能会导致数据损坏或丢失。"
    },
    {
        "question": "已知手机中安装有QQ应用，以下哪个ADB备份命令不能备份到QQ应用数据？（C）。",
        "options": [
            "A.adb backup -apk -shared com.tencenD.mobileqq",
            "B.adb backup -noapk -noshared com.tencenD.mobileqq",
            "C.adb backup -apk -shared -system com.tencent.mm",
            "D.adb backup -noapk -shared -all"
        ],
        "answer": "C",
        "hint": "该命令会备份系统应用com.tencent.mm的数据，而不是QQ应用coA.tencenD.mobileqq的数据。"
    },
    {
        "question": "用于查看/var/log/wtmp日志的命令是（B）。",
        "options": [
            "A.showlog",
            "B.last",
            "C.lasttmp",
            "D.lastlog"
        ],
        "answer": "B",
        "hint": "last命令用于显示用户的登录历史，它读取/var/log/wtmp文件。"
    },
    {
        "question": "电子邮箱是（B），具有指向特定人的特点。",
        "options": [
            "A.网络特征",
            "B.标识特征",
            "C.唯一特征",
            "D.准确特征"
        ],
        "answer": "B",
        "hint": "电子邮箱地址是标识特定用户的一种独特方式，具有标识特征。"
    },
    {
        "question": "如果对象将多个JPEG图片的文件的扩展名改为其他名称,通过（A）可以快速找到这些文件。",
        "options": [
            "A.散列值比对(MD5)",
            "B.散列值比对(SHA-1)",
            "C.文件签名分析",
            "D.以上答案均不正确"
        ],
        "answer": "A",
        "hint": "MD5是一种广泛使用的散列函数，可以用来快速识别文件，即使文件扩展名被更改。"
    },
    {
        "question": "不能用来进行数据恢复的工具软件（A）。",
        "options": [
            "A.Encase",
            "B.ExifShow",
            "C.EasyRecovery",
            "D.FinalData"
        ],
        "answer": "B",
        "hint": "ExifShow主要用于显示EXIF信息，不是用来进行数据恢复的工具。"
    },
    {
        "question": "能深入操作系统底层查看slack空间、未分配空间等数据的工具是（D）。",
        "options": [
            "A.EasyRecovery",
            "B.FinalData",
            "C.Nslookup",
            "D.Encase"
        ],
        "answer": "D",
        "hint": "Encase是一款专业的计算机取证工具，可以深入操作系统底层进行数据查看和恢复。"
    },
    {
        "question": "安卓手机的软件安装包格式为（C）。",
        "options": [
            "A.msi",
            "B.exe",
            "C.apk",
            "D.ipa",
        ],
        "answer": "C",
        "hint": "APK（AndroidPackage）是安卓操作系统中应用程序的安装包格式。"
    },
    {
        "question": "在Windows操作系统中用于打开注册表编辑器的命令是（C）。",
        "options": [
            "A.msconfig",
            "B.open",
            "C.regedit",
            "D.read"
        ],
        "answer": "D",
        "hint": "regedit是Windows操作系统中用于打开注册表编辑器的命令。"
    },
    {
        "question": "关于日志分析，正确的是（B）。",
        "options": [
            "A.日志分析无法定位攻击者的操作",
            "B.删除但未被覆盖的日志可以进行日志恢复",
            "C.可以通过关键词搜索查找被删除的日志",
            "D.日志分析可以查看入侵者访问网页木马的相关信息"
        ],
        "answer": "B",
        "hint": "如果日志数据未被覆盖，即使被删除，也可以通过日志恢复技术进行恢复。"
    },
    {
        "question": "按照检验过程，电子物证检验的四个阶段是（A）。",
        "options": [
            "A.案件受理—提取数据—检验数据—分析数据并得出结果",
            "B.案件受理—提取数据—检验数据—形成鉴定文书",
            "C.提取数据—检验数据—分析数据并得出结果—形成鉴定文书",
            "D.提取数据—分析数据—检验数据—形成鉴定文书"
        ],
        "answer": "A",
        "hint": "电子物证检验通常包括案件受理、数据提取、数据检验和数据分析得出结果这四个阶段。"
    },
    {
        "question": "对已经被破坏或删除的办公文档碎片的检验方法叙述错误的是（C）。",
        "options": [
            "A.可根据文档的内容设置关键字进行查找",
            "B.可根据文档属性设置关键字进行查找",
            "C.可根据文档关联关系设置关键字进行查找",
            "D.可根据文档结构信息设置关键字进行查找"
        ],
        "answer": "C",
        "hint": "文档关联关系并不是用于查找文档碎片的有效方法，关键字查找通常基于内容、属性或结构信息。"
    },
    {
        "question": "在进行电子物证检验时，如果嫌疑人将多个JPEG图片的扩展名改为了其他名称，需要通过（C）方法才能找到这些文件。",
        "options": [
            "A.散列值比对",
            "B.文件签名分析",
            "C.关键字搜索",
            "D.文本风格比对"
        ],
        "answer": "B",
        "hint": "文件签名分析可以帮助识别文件的真实类型，即使文件扩展名被更改。"
    },
    {
        "question": "一个文件的扩展名通常表示（B）。",
        "options": [
            "A.文件的大小",
            "B.文件的类型",
            "C.文件的版本",
            "D.文件的属性"
        ],
        "answer": "B",
        "hint": "文件扩展名用于标识文件的格式或类型，如.txt、.jpg、.png等。"
    },
    {
        "question": "安卓手机连接电脑获取数据需要在手机中打开什么设置（A）。",
        "options": [
            "A.开发者模式",
            "B.测试者模式",
            "C.使用者模式",
            "D.高级模式"
        ],
        "answer": "A",
        "hint": "开发者模式可以提供更多的调试选项，通常用于连接电脑进行数据获取。"
    },
    {
        "question": "我国社会主义道德建设的原则是（A）。",
        "options": [
            "A.集体主义",
            "B.人道主义",
            "C.功利主义",
            "D.合理利己主义"
        ],
        "answer": "A",
        "hint": "集体主义是我国社会主义道德建设的基本原则。"
    },
    {
        "question": "关于道德评价，正确的说法是（D）。",
        "options": [
            "A.每个人都能对他人进行道德评价，但不能做自我道德评价",
            "B.道德评价是一种纯粹的主观判断，没有客观依据和标准",
            "C.领导的道德评价具有权威性",
            "D.对一种行为进行道德评价，关键看其是否符合社会道德规范"
        ],
        "answer": "D",
        "hint": "道德评价是基于行为是否符合社会道德规范来进行的，而不是个人主观判断。"
    },
    {
        "question": "职业道德建设的核心是（B）。",
        "options": [
            "A.服务群众",
            "B.爱岗敬业",
            "C.办事公道",
            "D.奉献社会"
        ],
        "answer": "B",
        "hint": "爱岗敬业是职业道德建设的核心，强调对工作的热爱和投入。"
    },
    {
        "question": "从我国历史和国情出发，社会主义职业道德建设要坚持的最根本的原则是（D）。",
        "options": [
            "A.人道主义",
            "B.爱国主义",
            "C.社会主义",
            "D.集体主义"
        ],
        "answer": "D",
        "hint": "集体主义是社会主义职业道德建设的最根本原则，强调集体利益高于个人利益。"
    },
    {
        "question": "在职业活动中，主张个人利益高于他人利益、集体利益和国家利益的思想属于（A）。",
        "options": [
            "A.极端个人主义",
            "B.自由主义",
            "C.享乐主义",
            "D.拜金主义"
        ],
        "answer": "A",
        "hint": "极端个人主义强调个人利益高于一切，这与社会主义职业道德建设的原则相违背。"
    },
    {
        "question": "在Windows中，录音机播放文件的总计时间在（B）显示。",
        "options": [
            "A.在效果的菜单下",
            "B.波形框的左边",
            "C.波形框的右边",
            "D.没有地方显示"
        ],
        "answer": "D",
        "hint": "录音机播放文件时，波形框的右边通常会显示文件的总计播放时间。"
    },
    {
        "question": "在Windows中，右击“开始”按钮出现快捷菜单，下列选项中不属于其中命令的是（D）。",
        "options": [
            "A.资源管理器",
            "B.运行",
            "C.搜索",
            "D.打开"
        ],
        "answer": "D",
        "hint": "右击'开始'按钮出现的快捷菜单中不包含'打开'这一命令。"
    },
    {
        "question": "在Windows中，右击（A）图标不会出现“资源管理器”命令。",
        "options": [
            "A.我的电脑",
            "B.网上邻居",
            "C.InternetExplorer",
            "D.回收站"
        ],
        "answer": "D",
        "hint": "右击InternetExplorer图标时，不会出现'资源管理器'这一选项。"
    },
    {
        "question": "在Windows中，有关“资源管理器”右边窗口中的内容，下列说法正确的是（D）。",
        "options": [
            "A.只能使用“打开”命令",
            "B.不可以使用“复制”命令",
            "C.不能使用“删除”命令",
            "D.可以使用“删除”命令"
        ],
        "answer": "D",
        "hint": "在资源管理器的右边窗口中，用户可以使用'删除'命令来删除文件或文件夹。"
    },
    {
        "question": "在Windows中，单击“资源管理器”中左边的窗口的文件夹，然后使用键盘上的上下键移动，则右边的窗口（B）。",
        "options": [
            "A.内容将不断变化",
            "B.内容将不变化",
            "C.始终显示当前文件的内容",
            "D.始终显示前一个文件夹的内容"
        ],
        "answer": "B",
        "hint": "在资源管理器中，如果只单击左边窗口的文件夹而不打开，右边窗口的内容不会变化。"
    },
    {
        "question": "在Windows中，如果在“资源管理器”中将当前磁盘由驱动器D改变到驱动器C，下面的操作正确的是（A）。",
        "options": [
            "A.单击驱动器C的图标",
            "B.右击驱动",
            "C.右键双击驱动器C的图标",
            "D.双击驱动器C的图标"
        ],
        "answer": "D",
        "hint": "在资源管理器中，双击驱动器C的图标可以切换到该驱动器。"
    },
    {
        "question": "在资源管理器中，点击文件夹，选择“文件”菜单中的“删除”命令，则（B）。",
        "options": [
            "A.文件夹被删除",
            "B.弹出“删除”对话框",
            "C.文件夹被发送到回收站",
            "D.文件夹消失"
        ],
        "answer": "B",
        "hint": "选择删除命令后，会弹出确认删除的对话框，提示用户确认删除操作。"
    },
    {
        "question": "在Windows中，“显示属性”对话框中有（B）个选项卡。",
        "options": [
            "A.4",
            "B.5",
            "C.6",
            "D.7"
        ],
        "answer": "B",
        "hint": "Windows操作系统中的“显示属性”对话框通常包含5个选项卡。"
    },
    {
        "question": "路由发生在TCP/IP模型的（B）。",
        "options": [
            "A.应用层",
            "B.网络层",
            "C.传输层",
            "D.物理层"
        ],
        "answer": "B",
        "hint": "路由是在网络层进行的，负责在网络中转发数据包。"
    },
    {
        "question": "二层交换机根据（D）信息决定如何转发数据帧。",
        "options": [
            "A.源MAC地址",
            "B.源IP地址",
            "C.目的端口地址",
            "D.目的MAC地址"
        ],
        "answer": "D",
        "hint": "二层交换机通过查看数据帧中的目的MAC地址来决定如何转发数据帧。"
    },
    {
        "question": "（B）命令被用来验证中继链路的配置状态。",
        "options": [
            "A.show interfaces vlan",
            "B.show interfaces trunk",
            "C.show interfacess witchport",
            "D.show ipinterface brief"
        ],
        "answer": "B",
        "hint": "showinterfacestrunk命令用于验证中继链路（trunklink）的配置状态。"
    },
    {
        "question": "在以下无线技术中，（A）属于开放式访问。",
        "options": [
            "A.SSID",
            "B.WEP",
            "C.WPA",
            "D.WPA2"
        ],
        "answer": "A",
        "hint": "SSID（服务集标识）本身并不提供访问控制，因此被认为是开放式访问。"
    },
    {
        "question": "计算机中信息的传递是以（A）为单位。",
        "options": [
            "A.位",
            "B.字长",
            "C.字",
            "D.字节"
        ],
        "answer": "D",
        "hint": "计算机中信息的基本存储和传输单位是字节。"
    },
    {
        "question": "一个公司可以接纳多名职员参加工作，但每个职员只能在一个公司工作，从公司到职员之间的联系类型是（D）。",
        "options": [
            "A.多对多",
            "B.一对一",
            "C.多对一",
            "D.一对多"
        ],
        "answer": "B",
        "hint": "这种联系类型表明每个职员只能在一个公司工作，符合一对一的联系类型。"
    },
    {
        "question": "关系数据表的关键字由（D）个字段组成。",
        "options": [
            "A.一个",
            "B.两个",
            "C.多个",
            "D.一个或多个"
        ],
        "answer": "D",
        "hint": "关系数据表的关键字可以由一个或多个字段组成，用以唯一标识表中的每一行。"
    },
    {
        "question": "参照完整性规则指出：表的（B）必须是另一个表主键的有效值，或是空值。",
        "options": [
            "A.候选键",
            "B.外键",
            "C.主键",
            "D.主属性"
        ],
        "answer": "B",
        "hint": "外键是参照完整性规则的核心，它必须是它所在表的主键或者是一个空值。"
    },
    {
        "question": "关系数据库是若干（A）的集合。",
        "options": [
            "A.表（关系）",
            "B.视图",
            "C.列",
            "D.行"
        ],
        "answer": "A",
        "hint": "关系数据库由多个表组成，每个表代表一个关系。"
    },
    {
        "question": "关系数据模型的3个组成部分中，不包括（D）。",
        "options": [
            "A.完整性规则",
            "B.数据结构",
            "C.数据操作",
            "D.并发控制"
        ],
        "answer": "D",
        "hint": "关系数据模型的组成部分包括数据结构、数据操作和完整性规则，并不包括并发控制。"
    },
    {
        "question": "数据库中的冗余数据是指（D）的数据。",
        "options": [
            "A.容易产生错误",
            "B.容易产生冲突",
            "C.无关紧要",
            "D.由基本数据导出"
        ],
        "answer": "D",
        "hint": "冗余数据是指数据库中重复存储的数据，它是由基本数据导出的。"
    },
    {
        "question": "当数据的全局逻辑结构改变时，通过对映像的相应改变可以保持数据的局部逻辑结构不变。这称为数据的（A）。",
        "options": [
            "A.逻辑独立性",
            "B.局部独立性",
            "C.原子性",
            "D.物理结构性"
        ],
        "answer": "A",
        "hint": "逻辑独立性允许数据全局逻辑结构的改变而不影响局部逻辑结构。"
    },
    {
        "question": "不是字符数据类型的是（A）。",
        "options": [
            "A.datetime",
            "B.text",
            "C.char",
            "D.varchar"
        ],
        "answer": "A",
        "hint": "datetime不是字符数据类型，而是一种日期时间数据类型。"
    },
    {
        "question": "“姓名”列被定义为varchar(8)，以下说法正确的是（C）。",
        "options": [
            "A.也可以定义为char(8)，二者没有区别",
            "B.如果输入字符长度短于8时用空格填满",
            "C.可以输入8个汉字",
            "D.最多只能输入4个汉字"
        ],
        "answer": "D",
        "hint": "varchar(8)意味着该列可以存储最多8个字符，由于一个汉字可能占用多个字符位置，所以最多只能输入4个汉字。"
    },
    {
        "question": "可使用下列操作中的（C）为字段输入NULL值。",
        "options": [
            "A.输入NULL",
            "B.输入\u003cNULL\u003e",
            "C.将字段清空",
            "D.按Ctrl+0键"
        ],
        "answer": "A",
        "hint": "在数据库中，通常直接输入NULL来为字段赋予NULL值。"
    },
    {
        "question": "下列用于定义字段的SQL语句中，错误的是（C）。",
        "options": [
            "A.学号varchar(10)",
            "B.成绩int4",
            "C.产量float",
            "D.价格decimal(8,4)"
        ],
        "answer": "B",
        "hint": "在定义字段时，如果使用int类型，不需要指定长度，因此'成绩int4'是错误的定义。"
    },
    {
    "question": "设关系数据库中一个表S的结构为：S(SN,CN,grade)，其中SN为学生名，CN为课程名，均为字符型；grade为成绩，数值型，下列（A）选项是正确的。",
    "options": [
        "A.DELETE FROM S WHERE SN='JULIE'",
        "B.DELETE * FROM S WHERE SN='JULIE'",
        "C.DELETE FROM S WHERE SN='JULIE'",
        "D.DELETE * FROM S WHERE SN='JULIE'"
    ],
    "answer": "A",
    "hint": "正确的SQL删除语句不需要在DELETE后面加'*'，直接指定表名和条件即可。"
    },
    {
        "question": "苹果手机通讯录的数据库名字是（A）。",
        "options": [
            "A.Contacts.db",
            "B.Calendar.sqlitedb",
            "C.Photos.sqlite",
            "D.consolidated.db"
        ],
        "answer": "A",
        "hint": "苹果手机通讯录通常存储在名为ContactC.db的SQLite数据库中。"
    },
    {
        "question": "安卓手机用户APP存放目录是（B）。",
        "options": [
            "A./system/app",
            "B./data/app",
            "C./data/data",
            "D./data/system"
        ],
        "answer": "D",
        "hint": "安卓手机中用户安装的应用程序数据通常存放在/data/data目录下。"
    },
    {
        "question": "安卓手机屏幕锁密钥文件存放在（C）。",
        "options": [
            "A./system/app",
            "B./data/app",
            "C./data/data",
            "D./data/system"
        ],
        "answer": "D",
        "hint": "屏幕锁密钥文件通常存放在/data/data目录下，与特定应用程序相关联。"
    },
    {
        "question": "在现场不关闭电子设备的情况下直接分析和提取电子系统中的数据属于（B）。",
        "options": [
            "A.收集证据",
            "B.提取固定易丢失数据",
            "C.电子证据检查",
            "D.在线分析"
        ],
        "answer": "B",
        "hint": "不关闭设备直接分析数据通常是为了提取那些可能丢失的关键数据。"
    },
    {
        "question": "易丢失数据提取和在线分析，不得将生成、提取的数据存储在原始存储介质中；无特殊原因需要，不得在目标系统中安装新的应用程序。安装新的应用程序的，应当在（A）中记录安装的程序及目的。",
        "options": [
            "A.现场勘验检查笔录",
            "B.固定电子证据清单",
            "C.勘验检查照片记录表",
            "D.封存电子证据清单"
        ],
        "answer": "A",
        "hint": "现场勘验检查笔录是记录此类操作的正式文档，确保取证过程的透明性和可追溯性。"
    },
    {
        "question": "下列不属于电子证据的是（D）。",
        "options": [
            "A.微博",
            "B.数字化形式记载的证人证言",
            "C.用户注册信息",
            "D.数字证书"
        ],
        "answer": "D",
        "hint": "微博、数字化形式记载的证人证言、用户注册信息都可以作为电子证据，而数字证书是电子签名的一部分，不是证据本身。"
    },
    {
        "question": "以下哪个系统不属于手机操作系统（D）。",
        "options": [
            "A.Symbian",
            "B.Android",
            "C.Hatmony",
            "D.windows8"
        ],
        "answer": "D",
        "hint": "Windows8是一个计算机操作系统，而不是手机操作系统。"
    },
    {
        "question": ".htmaccess文件的作用描述错误的是（D）。",
        "options": [
            "A.可以禁止目录列表",
            "B.配置默认文档",
            "C.自定义404错误页面",
            "D.修改密码"
        ],
        "answer": "D",
        "hint": ".htmaccess文件用于配置Apache服务器的目录级设置，但不用于修改密码。"
    },
    {
        "question": "LDAP认证查询语句为：(\u0026(USER=Uname)(PASSWORD=Pwd))，Uname和pwd可控，关于绕过认证下面说法正确的是（B）。",
        "options": [
            "A.修改Uname的值为：admin(\u0026",
            "B.修改Uname的值为：admin(\u0026)",
            "C.修改Uname的值为：admin(\u0026)(\u0026",
            "D.修改Uname的值为：admin("
        ],
        "answer": "D",
        "hint": "LDAP查询语句中的'\u0026'用于连接多个条件，去掉'\u0026'后可以绕过认证。"
    },
    {
        "question": "在保存数字证据时下列哪个陈述是不正确的（B）。",
        "options": [
            "A.指令抽离",
            "B.动态加载",
            "C.指令转换",
            "D.虚拟机源码保护"
        ],
        "answer": "D",
        "hint": "虚拟机源码保护与保存数字证据的过程无直接关系。"
    },
    {
        "question": "SCOTT用户首次使用时被进行了加锁设置，当需对其解锁时，需要使用以下（B）关键字。",
        "options": [
            "A.create user",
            "B.alter user",
            "C.modify user",
            "D.delete user"
        ],
        "answer": "B",
        "hint": "alteruser是SQL命令，用于修改用户属性，包括解锁用户。"
    },
    {
        "question": "SCOTT用户的默认密码为（C）。",
        "options": [
            "A.system",
            "B.orcl",
            "C.tiger",
            "D.oracle"
        ],
        "answer": "C",
        "hint": "在Oracle数据库中，SCOTT用户的默认密码通常是'tiger'。"
    },
    {
        "question": "以下哪个不是创建用户过程中必要的信息（C）。",
        "options": [
            "A.用户名",
            "B.用户权限",
            "C.临时表空间",
            "D.口令"
        ],
        "answer": "C",
        "hint": "创建用户时，通常需要指定用户名、口令和权限，而临时表空间不是必要信息。"
    },
    {
        "question": "在数据库系统中，对存取权限的定义称为（B）。",
        "options": [
            "A.命令",
            "B.授权",
            "C.定义",
            "D.审计"
        ],
        "answer": "B",
        "hint": "授权（Grant）是数据库中用来赋予用户或角色特定权限的过程。"
    },
    {
        "question": "SQL语言的GRANT和REVOKE语句主要是用来维护数据库的（C）。",
        "options": [
            "A.完整性",
            "B.可靠性",
            "C.安全性",
            "D.一致性"
        ],
        "answer": "C",
        "hint": "GRANT和REVOKE语句用于控制用户对数据库对象的访问，是维护数据库安全性的重要工具。"
    },
    {
        "question": "下列哪个不是用户的权限（D）。",
        "options": [
            "A.Update",
            "B.Delete",
            "C.Select",
            "D.Create"
        ],
        "answer": "D",
        "hint": "用户权限通常包括更新（Update）、删除（Delete）、选择（Select）和创建（Create），而'D'并不是一个权限。"
    },
    {
        "question": "设置参照完整性的目的是（D）。",
        "options": [
            "A.定义表的外部联接",
            "B.定义表的临时联接",
            "C.定义表的永久联接",
            "D.在插入、删除、更新时，确保已定义的表间关系"
        ],
        "answer": "D",
        "hint": "参照完整性确保在数据库中维护表与表之间的链接，保证数据的准确性。"
    },
    {
        "question": "一个事务的执行，要么全部完成，要么全部不做，一个事务中对数据库的所有操作都是一个不可分割的操作序列的属性是（A）。",
        "options": [
            "A.原子性",
            "B.一致性",
            "C.独立性",
            "D.持久性"
        ],
        "answer": "A",
        "hint": "原子性是事务的基本特征之一，意味着事务中的所有操作要么全部完成，要么全部不做。"
    },
    {
        "question": "SQL语言中的COMMIT语句的主要作用是（C）。",
        "options": [
            "A.结束程序",
            "B.返回系统",
            "C.提交事务",
            "D.存储",
        ],
        "answer": "C",
        "hint": "COMMIT语句用于提交事务，确保所有的更改被永久保存到数据库中。"
    },
    {
        "question": "日志文件是用于记录（C）。",
        "options": [
            "A.程序运行过程",
            "B.程序执行代码",
            "C.对数据库的更新操作",
            "D.程序执行的结果"
        ],
        "answer": "C",
        "hint": "日志文件用于记录对数据库进行的更新操作，以便于数据恢复和问题诊断。"
    },
    {
        "question": "恢复的主要技术是（C）。",
        "options": [
            "A.事务",
            "B.数据冗余",
            "C.日志文件和数据转储",
            "D.数据转储"
        ],
        "answer": "C",
        "hint": "数据库恢复通常利用日志文件和数据转储来实现数据的恢复到某一状态。"
    },
    {
        "question": "下列不属于数据库恢复策略与方法的是（D）。",
        "options": [
            "A.事务故障的恢复",
            "B.系统故障的恢复",
            "C.介质故障的恢复",
            "D.应用程序故障的恢复"
        ],
        "answer": "D",
        "hint": "数据库恢复策略通常针对事务故障、系统故障和介质故障，不包括应用程序故障。"
    },
    {
        "question": "JPG文件的开头特征是（B）。",
        "options": [
            "A.FFFF",
            "B.FFD8",
            "C.FFD9",
            "D.JPG"
        ],
        "answer": "B",
        "hint": "JPEG图像文件通常以FFD8作为文件的起始标记。"
    },
    {
        "question": "jpg图片底层中，缩略图的头部代码是（A）。",
        "options": [
            "A.FF D4",
            "B.FF D8",
            "C.FF D9",
            "D.FF D5"
        ],
        "answer": "A",
        "hint": "JPEG图像中的缩略图通常以FFD4作为头部代码。"
    },
    {
        "question": "以下哪个不是镜像的格式（D）。",
        "options": [
            "A.DD",
            "B.E01",
            "C.AFF",
            "D.F1"
        ],
        "answer": "D",
        "hint": "DD、E01和AFF是常见的镜像文件格式，而F1不是镜像格式。"
    },
    {
        "question": "因为分区索引目录丢失的数据应该使用哪种扫描方式恢复数据（C）。",
        "options": [
            "A.使用索引扫描方式",
            "B.使用误格式化扫描方式",
            "C.使用MFT扫描方式",
            "D.使用数据区扫描方式"
        ],
        "answer": "D",
        "hint": "当分区索引目录丢失时，可以使用数据区扫描方式来恢复数据。"
    },
    {
        "question": "U盘中文件包和文件名乱码是（B）。",
        "options": [
            "A.PDT表损坏",
            "B.DBR表损坏",
            "C.BPB表损坏",
            "D.文件内容底层被覆盖"
        ],
        "answer": "B",
        "hint": "DBR（文件分配表）损坏可能导致文件系统无法正确读取文件名和路径，导致乱码。"
    },
    {
        "question": "以下选项不是DBR的组成部分（B）。",
        "options": [
            "A.操作系统引导程序",
            "B.MFTMirr",
            "C.BPB",
            "D.扩展BPB"
        ],
        "answer": "A",
        "hint": "操作系统引导程序不是DBR（文件分配表）的组成部分。"
    },
    {
        "question": "FAT文件格式下，删除的文件头字节改为什么代码标记（A）。",
        "options": [
            "A.E5",
            "B.EF",
            "C.FD",
            "D.80"
        ],
        "answer": "A",
        "hint": "在FAT文件系统中，当文件被删除时，文件目录项的首字节被改为E5。"
    },
    {
        "question": "计算机硬盘为标准的MBR硬盘分区结构，C盘为FAT32文件系统，其DBR备份在第几个扇区上（D）。",
        "options": [
            "A.63扇区",
            "B.32扇区",
            "C.69扇区",
            "D.2048扇区"
        ],
        "answer": "D",
        "hint": "在FAT32文件系统中，DBR备份通常位于数据区域的开始位置，即2048扇区。"
    },
    {
        "question": "ECS服务器指的是以下哪种服务器类型（D）。",
        "options": [
            "A.独立服务器",
            "B.VPS",
            "C.虚拟主机",
            "D.云服务器"
        ],
        "answer": "D",
        "hint": "ECS（ElasticComputeService）通常指的是云服务器服务。"
    },
    {
        "question": "无法扣押原始存储介质的，可以提取电子数据，但应当在笔录中注明不能扣押原始存储介质的原因、原始存储介质的存放地点或者电子数据的来源等情况，并计算电子数据的（A）。",
        "options": [
            "A.MD5",
            "B.完整性校验值",
            "C.哈希值",
            "D.SHA1"
        ],
        "answer": "D",
        "hint": "计算哈希值是确保电子数据完整性的一种方法。"
    },
    {
        "question": "以下哪个操作系统开始具有WindowsBitLocker加密功能（B）。",
        "options": [
            "A.WindowsXP",
            "B.WindowsVista",
            "C.Windows7",
            "D.Windows10"
        ],
        "answer": "B",
        "hint": "WindowsBitLocker加密功能首次出现在WindowsVista操作系统中。"
    },
    {
        "question": "macOS是基于（B）混合内核的图形化操作系统，一般情况下在普通PC上无法安装的操作系统。",
        "options": [
            "A.linux",
            "B.Unix",
            "C.Windows",
            "D.DOS"
        ],
        "answer": "B",
        "hint": "macOS是基于Unix的混合内核操作系统，专为苹果电脑设计，普通PC上无法安装。"
    },
    {
        "question": "获取电子数据时需要对具体的介质进行（A），这是分析电子数据的前提，能够有效防止取证过程中有意或无意地变动数据，确保所获数据的真实可靠。",
        "options": [
            "A.复制",
            "B.录像",
            "C.写保护",
            "D.打印"
        ],
        "answer": "C",
        "hint": "写保护是确保电子数据在获取过程中不被更改的重要步骤。"
    },
    {
        "question": "定向采集软件非必须采集的数据是（D）。",
        "options": [
            "A.案件信息",
            "B.受害人信息",
            "C.设备信息",
            "D.短信信息"
        ],
        "answer": "D",
        "hint": "定向采集软件可以根据案件需求选择性地采集数据，短信信息不是必须采集的数据。"
    },
    {
        "question": "以下哪种手机数据提取方法能够获得最全的电子数据（C）。",
        "options": [
            "A.备份",
            "B.互传",
            "C.镜像",
            "D.直传"
        ],
        "answer": "D",
        "hint": "镜像方法可以完整复制手机存储介质上的所有数据，包括已删除的数据。"
    },
    {
        "question": "如遇手机等移动终端内的APP应用被犯罪嫌疑人删除情况，现勘人员应如何处置（A）。",
        "options": [
            "A.严禁对涉案手机等移动终端进行有损数据原始性的各种操作，迅速将手机等移动终端调至飞行模式，进行相关信息记录，封存该涉案检材",
            "B.对被删除APP应用进行重新安装",
            "C.在安装完成被删除APP后立即登录该应用",
            "D.立即关机"
        ],
        "answer": "A",
        "hint": "在犯罪嫌疑人删除了APP应用的情况下，现勘人员应确保不破坏数据的原始性，避免进行可能损害数据的操作，并采取适当措施保护现场。"
    },
    {
        "question": "提取手机以外其它类型移动终端进行断网断电离线操作，并且同时提取除（D）的配套物品。",
        "options": [
            "A.配套的电源",
            "B.充电器",
            "C.数据线",
            "D.外包装"
        ],
        "answer": "D",
        "hint": "在提取移动终端数据时，通常需要断开网络连接并关闭电源，同时提取与设备相关的配件，但不包括外包装。"
    },
    {
        "question": "现场勘验检查时对处于开机状态的移动终端，应采用（B）之外的方式使其从网络隔离。",
        "options": [
            "A.装入塑料物证袋",
            "B.开启飞行模式",
            "C.禁用各种数据网络",
            "D.使用屏蔽设备"
        ],
        "answer": "B",
        "hint": "开启飞行模式是常用的方法来使移动终端从网络隔离，但还可以使用其他方式，如屏蔽设备或物理隔离。"
    },
    {
        "question": "目前手机取证中，需要利用高通（D）端口直接回读userdata分区进行数据提取。",
        "options": [
            "A.8080",
            "B.9006",
            "C.9008",
            "D.8888"
        ],
        "answer": "B",
        "hint": "高通的9006端口用于直接读取手机的userdata分区，这是一种常见的手机取证技术。"
    },
    {
        "question": "保数据解锁手机BL锁，然后写入带有root权限的文件来破解密码或提取镜像，适用于（A）手机。",
        "options": [
            "A.高通骁龙CPU",
            "B.华为海思麒麟CPU",
            "C.联发科MTKCPU",
            "D.三星Exynos（猎户座）CPU"
        ],
        "answer": "A",
        "hint": "高通骁龙CPU的手机可以通过特定的方法来解锁BL锁并获取root权限，以便于数据提取和密码破解。"
    },
    {
        "question": "以下哪些信息不包含在Whois信息中（D）。",
        "options": [
            "A.URL注册商",
            "B.URL注册人及电话",
            "C.URL注册时间及过期时间",
            "D.URL注册地址"
        ],
        "answer": "D",
        "hint": "Whois信息通常包含域名注册商、注册人信息、注册时间和过期时间，但不包括注册地址。"
    },
    {
        "question": "分析涉网新型案件涉案APK时，客服的调证的关键信息主要是在哪一步查找的（A）。",
        "options": [
            "A.静态分析",
            "B.动态分析",
            "C.代码分析",
            "D.解压缩分析"
        ],
        "answer": "A",
        "hint": "静态分析是指不运行程序本身，通过分析程序代码来获取信息，客服信息通常在这一步中查找。"
    },
    {
        "question": "涉网新型案件涉案APP的犯罪主网站可以通过以下哪种方法获取到（C）。",
        "options": [
            "A.静态分析",
            "B.动态分析",
            "C.动态分析和静态分析都可以",
            "D.动态分析和静态分析都不行"
        ],
        "answer": "D",
        "hint": "犯罪主网站的信息可以通过静态分析和动态分析两种方法来获取。"
    },
    {
        "question": "对APK静态分析不包含以下哪些数据（D）。",
        "options": [
            "A.权限列表",
            "B.签名证书",
            "C.打包公司",
            "D.内嵌的收款账号"
        ],
        "answer": "D",
        "hint": "静态分析通常不涉及内嵌的收款账号这类运行时数据，而是关注代码和资源文件等静态信息。"
    },
    {
        "question": "关于分发平台以下说法错误的是（A）。",
        "options": [
            "A.分发平台只提供APK下载服务",
            "B.有些分发平台是嫌疑人自己搭建的",
            "C.分发平台源自于APP测试用途",
            "D.对分发平台的服务器进行分析能获取到上传者相关信息"
        ],
        "answer": "A",
        "hint": "分发平台除了提供APK下载服务外，还可以有其他功能，如统计分析、用户反馈等。"
    },
    {
        "question": "一般涉案APP中不会有以下哪种信息（D）。",
        "options": [
            "A.网站域名",
            "B.第三方SDK",
            "C.第三方客服",
            "D.嫌疑人姓名"
        ],
        "answer": "D",
        "hint": "涉案APP中通常包含网站域名、第三方SDK和第三方客服信息，但不会包含嫌疑人的真实姓名。"
    },
    {
        "question": "以下关于APK静态分析和动态分析的说法正确的是（D）。",
        "options": [
            "A.APK静态分析就是静态反编译，动态分析就是动态反编译",
            "B.APK通过动态分析可以分析出APK的加固信息",
            "C.APK静态分析无法分析到里面的一些客服信息",
            "D.动态分析一定要在互联网的环境下才可以分析的最全面"
        ],
        "answer": "D",
        "hint": "动态分析通常需要在互联网环境下进行，以便捕获网络通信等动态行为。"
    },
    {
        "question": "安卓APK应用中提取的证书HASH,可以用于（A）。",
        "options": [
            "A.查看APK签名",
            "B.应用关联",
            "C.进行HASH破解，解密出明文密码",
            "D.在应用里进行用户登录时使用"
        ],
        "answer": "B",
        "hint": "APK中的证书HASH可以用来关联应用和开发者，确认应用的来源。"
    },
    {
        "question": "以下不属于数据分析技术的是（D）。",
        "options": [
            "A.对已删除文件的恢复、重建技术",
            "B.关键字搜索技术",
            "C.日志分析",
            "D.特殊类型文件分析"
        ],
        "answer": "D",
        "hint": "特殊类型文件分析是数据分析的一部分，不属于不属于数据分析技术。"
    },
    {
        "question": "输出设备除显示器、绘图仪外，还有（D）。",
        "options": [
            "A.键盘",
            "B.鼠标",
            "C.扫描仪",
            "D.激光打印机"
        ],
        "answer": "D",
        "hint": "激光打印机是一种输出设备，用于打印文档和其他打印材料。"
    },
    {
        "question": "微型计算机中必须安装的软件是（A）。",
        "options": [
            "A.操作系统",
            "B.辅助教学系统",
            "C.财务分析系统",
            "D.文字处理系统"
        ],
        "answer": "A",
        "hint": "操作系统是微型计算机运行所必须的基本软件，提供了硬件运行和应用程序执行的基本环境。"
    },
    {
        "question": "下列（A）是合法的电子邮箱地址（B）。",
        "options": [
            "A.wanghua#sina.com",
            "B.wanghua@sina.com",
            "C.wanghua@sina",
            "D.http: //wanghua@sina.com"
        ],
        "answer": "B",
        "hint": "电子邮箱地址需要包含'@'符号，并且后缀前应为有效的域名，wanghua@sina.com是合法的电子邮箱地址。"
    },
    {
        "question": "下列表示的存储容量最小的是（D）。",
        "options": [
            "A.1TB",
            "B.10GB",
            "C.1024KB",
            "D.10240B"
        ],
        "answer": "D",
        "hint": "存储容量单位换算关系为1TB=1024GB，1GB=1024MB，1MB=1024KB，1KB=1024B，所以10240B是最小的。"
    },
    {
        "question": "下列部件中，不属于计算机主机内的是（C）。",
        "options": [
            "A.CPU",
            "B.主板",
            "C.键盘",
            "D.内存条"
        ],
        "answer": "C",
        "hint": "键盘是外部设备，不包含在计算机主机内部。"
    },
    {
        "question": "下列关于因特网信息资源的特点，叙述不正确的是（A）。",
        "options": [
            "A.所有资源都是不收费资源",
            "B.是涉及地域最广的资源",
            "C.资源分散存储，数量庞大",
            "D.获取时不受时间、空间等因素的制约"
        ],
        "answer": "A",
        "hint": "因特网信息资源虽然丰富，但并非所有资源都是免费的，有些资源需要付费才能获取。"
    },
    {
        "question": "下列用于文件压缩的软件是（B）。",
        "options": [
            "A.Excel",
            "B.WinZip",
            "C.PowerPoint",
            "D.Authorware"
        ],
        "answer": "B",
        "hint": "WinZip是一款广泛使用的文件压缩和解压缩软件。"
    },
    {
        "question": "下列有关回收站的说法中，正确的是（A）。",
        "options": [
            "A.回收站中的文件和文件夹都是可以还原的",
            "B.回收站中的文件和文件夹都是不可以还原的",
            "C.回收站中的文件是可以还原的，但文件夹是不可以还原的",
            "D.回收站中的文件夹是可以还原的，但文件是不可以还原的"
        ],
        "answer": "A",
        "hint": "回收站设计用于临时存放删除的文件和文件夹，用户可以从中还原这些项目。"
    },
    {
        "question": "下列属于计算机局域网基本部件的是（B）。",
        "options": [
            "A.声卡",
            "B.网卡",
            "C.网页浏览器",
            "D.媒体播放器"
        ],
        "answer": "B",
        "hint": "网卡是局域网中的基本部件，负责计算机之间的网络连接。"
    },
    {
        "question": "下列属于应用软件的是（D）。",
        "options": [
            "A.Windows",
            "B.Unix",
            "C.Linux",
            "D.Word"
        ],
        "answer": "D",
        "hint": "Word是一款文字处理软件，属于应用软件，用于文档的编辑和管理。"
    },
    {
        "question": "显示器是目前使用最多的（C）。",
        "options": [
            "A.存储器",
            "B.输入设备",
            "C.输出设备",
            "D.微处理器"
        ],
        "answer": "C",
        "hint": "显示器作为输出设备，用于显示计算机生成的图像和文字。"
    },
    {
        "question": "信息安全危害的两大源头是病毒和黑客，因为黑客是（B）。",
        "options": [
            "A.计算机编程高手",
            "B.网络的非法入侵者",
            "C.Cookies的发布者",
            "D.信息垃圾的制造者"
        ],
        "answer": "B",
        "hint": "黑客通常指那些未经授权而非法侵入计算机系统的人。"
    },
    {
        "question": "要查找局域网中的计算机，应进入（B）。",
        "options": [
            "A.我的电脑",
            "B.网上邻居",
            "C.IE浏览器",
            "D.控制面板"
        ],
        "answer": "B",
        "hint": "通过'网上邻居'可以查看和访问局域网内的计算机和共享资源。"
    },
    {
        "question": "以下行为中，不正当的是（C）。",
        "options": [
            "A.安装正版软件",
            "B.购买正版CD",
            "C.末征得同意私自使用他人资源",
            "D.参加反盗版公益活动"
        ],
        "answer": "C",
        "hint": "未经同意私自使用他人资源是不道德也是非法的行为。"
    },
    {
        "question": "以下属于系统软件的是（C）。",
        "options": [
            "A.财务管理软件",
            "B.图像编辑软件",
            "C.操作系统",
            "D.应用软件"
        ],
        "answer": "C",
        "hint": "操作系统是最基本的系统软件，提供了硬件运行和应用程序执行的基本环境。"
    },
    {
        "question": "域名最右边的部分表示区域，cn代表（B）。",
        "options": [
            "A.加拿大",
            "B.中国",
            "C.联合国",
            "D.美国"
        ],
        "answer": "B",
        "hint": ".cn是中国的国家顶级域名，表示该域名注册在中国。"
    },
    {
        "question": "在Internet上，为使计算机之间能够彼此通信，需要共同遵守某种协议。现在Internet广泛采用的一种通信协议是（C）。",
        "options": [
            "A.文件格式协议",
            "B.信息交换协议",
            "C.TCP/IP协议",
            "D.硬件生产标准协议"
        ],
        "answer": "C",
        "hint": "TCP/IP协议是互联网的基础协议，负责不同计算机之间的通信。"
    },
    {
        "question": "在磁盘上发现计算机病毒后，最彻底的解决办法是（D）。",
        "options": [
            "A.删除已感染的磁盘文件",
            "B.用杀毒软件处理",
            "C.删除所有的磁盘文件",
            "D.彻底格式化磁盘"
        ],
        "answer": "D",
        "hint": "彻底格式化磁盘可以移除磁盘上的所有数据，包括病毒，是最彻底的解决办法。"
    },
    {
        "question": "中央处理器（CPU）是电子计算机中的（B）。",
        "options": [
            "A.附属设备",
            "B.核心部件",
            "C.可有可无的设备",
            "D.次要部件"
        ],
        "answer": "B",
        "hint": "CPU是计算机的核心部件，负责执行程序指令和处理数据。"
    },
    {
        "question": "组建一个典型的小型局域网时，除了需要网络服务器、个人计算机、网间连接器、网线等设备外，还必须有下列哪一项硬件（C）。",
        "options": [
            "A.微波接收装置",
            "B.卫星地面站",
            "C.网络接口卡",
            "D.电信局的交换设备"
        ],
        "answer": "C",
        "hint": "网络接口卡（NIC）是连接计算机到网络的基本硬件设备。"
    },
    {
        "question": "以下有关EasyRecovery的说法不正确的是（D）。",
        "options": [
            "A.EasyRecovery在恢复数据时并不向硬盘写任何东西，而是在内存中镜像文件的FAT表和目录区",
            "B.使用该软件时一定要注意将恢复出来的数据保存在其他的硬盘空间内",
            "C.该软件能够对FAT和NTFS分区中的文件删除、格式化分区进行数据恢复",
            "D.它主要是对数据进行硬件恢复"
        ],
        "answer": "D",
        "hint": "EasyRecovery主要是软件级别的数据恢复工具，而不是硬件恢复工具。"
    },
    {
        "question": "以下不属于在数据恢复中需要使用的软件的是（D）。",
        "options": [
            "A.PC3000",
            "B.FinalData",
            "C.Encase",
            "D.FixRAR"
        ],
        "answer": "D",
        "hint": "FixRAR是一款用于修复RAR压缩文件的工具，并不专门用于数据恢复。"
    },
    {
        "question": "以下不属于电子证据特点的是（C）。",
        "options": [
            "A.电子证据的脆弱性",
            "B.电子证据的隐蔽性",
            "C.电子证据的不可挽救性",
            "D.电子证据对系统的依赖性"
        ],
        "answer": "C",
        "hint": "电子证据通常可以被恢复，因此并非不可挽救。"
    },
    {
        "question": "以下不属于计算机取证过程中分析过程的是（C）。",
        "options": [
            "A.协议分析",
            "B.镜像技术",
            "C.数据挖掘",
            "D.过程还原"
        ],
        "answer": "B",
        "hint": "镜像技术是用于创建数据副本的技术，而不是分析过程的一部分。"
    },
    {
        "question": "以下属于计算机取证技术的发展趋势的是（D）。",
        "options": [
            "A.动态取证技术",
            "B.计算机取证挖掘算法和柔性挖掘技术",
            "C.取证工具和过程的标准化",
            "D.以上都是"
        ],
        "answer": "D",
        "hint": "计算机取证技术的发展趋势包括动态取证技术、挖掘算法、柔性挖掘技术以及取证工具和过程的标准化。"
    },
    {
        "question": "以下关于硬盘的逻辑结构说法不正确的是（A）。",
        "options": [
            "A.磁道被划分成若干个段，每个段称为一个扇区。扇区的编号是按0,1，......顺序进行的",
            "B.随着读写磁头沿着盘片半径方向上下移动，每个盘片被划分成若干个同心圆磁道",
            "C.每个盘片有两个面，这两个面都是用来存储数据的",
            "D.硬盘柱面、磁道、扇区的划分表面上是看不到任何痕迹的"
        ],
        "answer": "A",
        "hint": "扇区的编号通常是从1开始，而不是从0开始。"
    },
    {
        "question": "以下不属于文件系统的是（A）。",
        "options": [
            "A.LINUX",
            "B.NTFS",
            "C.FAT32",
            "D.EXT2"
        ],
        "answer": "A",
        "hint": "LINUX是一个操作系统，而不是文件系统。"
    },
    {
        "question": "以下不属于数据分析技术的是（D）。",
        "options": [
            "A.对已删除文件的恢复、重建技术",
            "B.关键字搜索技术",
            "C.日志分析",
            "D.特殊类型文件分析"
        ],
        "answer": "D",
        "hint": "特殊类型文件分析是数据分析技术的一部分，不属于不属于数据分析技术。"
    },
    {
        "question": "以下（B）命令可以用来测试本地主机的网络连接是否通畅。",
        "options": [
            "A.traceroute",
            "B.ping",
            "C.ipconfig",
            "D.pslist"
        ],
        "answer": "B",
        "hint": "ping命令用于发送ICMP回显请求消息到网络主机，测试网络连接是否通畅。"
    },
    {
        "question": "在大多数黑客案件中，嗅探工具常被用来捕捉通过网络的流量以重建诸如上网和访问网络文件等功能，以下（C）是这类工具。",
        "options": [
            "A.FTK",
            "B.QuickViewPlus",
            "C.snifferpro",
            "D.NTI-DOC"
        ],
        "answer": "C",
        "hint": "snifferpro是一款网络嗅探工具，可以捕获网络流量并进行分析。"
    },
    {
        "question": "现场拍照一般建议的流程是：（B）。",
        "options": [
            "A.小区入口→房间→楼层、门牌号→主卧→电脑",
            "B.小区入口→楼层、门牌号→房间→主卧→电脑",
            "C.小区入口→主卧→房间→楼层、门牌号→电脑",
            "D.小区入口→电脑→房间→楼层、门牌号→主卧"
        ],
        "answer": "B",
        "hint": "现场拍照应按照从外到内的顺序进行，确保记录完整的现场信息。"
    },
    {
        "question": "目前主流的硬盘接口，俗称“串口”的为：（C）。",
        "options": [
            "A.ZIF",
            "B.SAS",
            "C.IDE",
            "D.SATA"
        ],
        "answer": "D",
        "hint": "SATA（串行ATA）是目前主流的硬盘接口，俗称串口。"
    },
    {
        "question": "需要一个记录有多数文件的文件签名特征及扩展名的数据库，即：（B）。",
        "options": [
            "B.签名库",
            "C.文件签名库",
            "D.文件库",
            "A.文件属性库"
        ],
        "answer": "C",
        "hint": "文件签名库包含多种文件格式的签名信息，用于识别和分类文件类型。"
    },
    {
        "question": "文件头部包含了成为（A）的识别信息，同一类型文件的文件头部信息是相同的。",
        "options": [
            "A.文件头",
            "B.扩展名",
            "C.签名",
            "D.以上答案均不正确"
        ],
        "answer": "C",
        "hint": "文件签名是用于识别文件类型的特定信息，通常位于文件的头部。"
    },
    {
        "question": "IMEI是国际移动设备身份码的缩写，国际移动装备识别码，是由（A）位数字组成的“电子串码”，它与每台手机相对应，理论上该码是全世界唯一的。",
        "options": [
            "A.14位",
            "B.15位",
            "C.16位",
            "D.17位"
        ],
        "answer": "D",
        "hint": "IMEI由16位数字组成，用于唯一标识移动设备。"
    },
    {
        "question": "通常情况下，收集数据的获取由现场环境和取证条件而决定，不包括以下哪种情况？（D）。",
        "options": [
            "A.可视化获取",
            "B.逻辑获取",
            "C.物理获取",
            "D.动态获取"
        ],
        "answer": "D",
        "hint": "数据收集通常包括可视化获取、逻辑获取和物理获取，而不涉及动态获取。"
    },
    {
        "question": "手机数据物理获取是使用特定的方法或软硬件工具，将手机内部存储空间完整获取，以便进行后期调查分析，以下不是物理获取方法的是（C）。",
        "options": [
            "A.镜像采集终端获取",
            "B.JTAG获取",
            "C.动态获取",
            "D.焊接获取"
        ],
        "answer": "D",
        "hint": "动态获取不是物理获取方法，它指的是在设备开机状态下进行的数据获取。"
    },
    {
        "question": "手机无法与分析机正常连接的原因（D）。",
        "options": [
            "A.手机驱动问题",
            "B.手机通讯模式问题",
            "C.手机数据线问题",
            "D.以上都是"
        ],
        "answer": "D",
        "hint": "手机无法与分析机正常连接可能由多种原因引起，包括驱动问题、通讯模式问题或数据线问题。"
    },
    {
        "question": "SCSI转换器用于将SCSI硬盘转换为标准（A）接口，从而与主机连接。",
        "options": [
            "A.SATA",
            "B.IDE",
            "C.SAS",
            "D.LIF"
        ],
        "answer": "A",
        "hint": "SCSI转换器可以将SCSI接口转换为SATA接口，以便与现代主机连接。"
    },
    {
        "question": "职业道德的“五个要求,既包含基础性的要求，也有较高的要求。其中，最基本的要求是（A）。",
        "options": [
            "A.爱岗敬业",
            "B.诚实守信",
            "C.服务群众",
            "D.办事公道奉献社会"
        ],
        "answer": "A",
        "hint": "爱岗敬业是职业道德的基础性要求，也是最基本的要求。"
    },
    {
        "question": "古人所谓的“鞠躬尽瘁，死而后已”，就是要求从业者在职业活动中做到（C）。",
        "options": [
            "A.忠诚",
            "B.审慎",
            "C.勤勉",
            "D.民主合作的目的就是得到各自的目标"
        ],
        "answer": "D",
        "hint": "“鞠躬尽瘁，死而后已”强调了从业者应勤勉工作，直到生命的最后一刻。"
    },
    {
        "question": "下列关于职业技能的说法中，正确的是（C）。",
        "options": [
            "A.掌握一定的职业技能，也就是有了较高的文化知识水平",
            "B.掌握一定的职业技能，就一定能履行好职业责任",
            "C.掌握一定的职业技能，有助于从业人员提高就业竞争力",
            "D.掌握一定的职业技能，就意味着有较高的职业道德素质"
        ],
        "answer": "D",
        "hint": "职业技能的掌握可以增强个人在就业市场中的竞争力。"
    },
    {
        "question": "关于道德，准确的说法是（C）。",
        "options": [
            "A.道德就是做好人好事",
            "B.做事符合他人利益就是有道德",
            "C.道德是处理人与人、人与社会、人与自然之间关系的特殊行为规范",
            "D.道德因人、因时而异，没有确定的标准"
        ],
        "answer": "C",
        "hint": "道德是一套行为规范，指导人们在不同社会关系中的行为。"
    },
    {
        "question": "与法律相比，道德（B）。",
        "options": [
            "A.产生的时间晚",
            "B.适用范围更广",
            "C.内容上显得十分笼统",
            "D.评价标准难以确定"
        ],
        "answer": "B",
        "hint": "道德的适用范围比法律更广泛，它涵盖了人们日常生活的各个方面。"
    },
    {
        "question": "在Windows中，剪贴板是用来在程序和文件间传递信息的临时存储区，此存储区是（C）。",
        "options": [
            "A.回收站的一部分",
            "B.硬盘的一部分",
            "C.内存的一部分",
            "D.软盘的一部分"
        ],
        "answer": "C",
        "hint": "剪贴板是位于计算机内存中的临时存储区，用于存储复制或剪切的数据。"
    },
    {
        "question": "Windows菜单操作中，如果某个菜单项的颜色暗淡，则表示（D）。",
        "options": [
            "A.只要双击，就能选中",
            "B.必须连续三击，才能选中",
            "C.单击被选中后，还会显示出一个方框要求操作者进一步输入信息",
            "D.在当前情况下，这项选择是没有意义的，选中它不会有任何反应"
        ],
        "answer": "D",
        "hint": "暗淡的菜单项表示在当前环境下该选项不可用或无意义，选择不会有任何反应。"
    },
    {
        "question": "文件ABC.Bmp存放在F盘的T文件夹中的G子文件夹下，它的完整文件标识符是（A）。",
        "options": [
            "A.F:\\T\\G\\ABC",
            "B.T:\\ABC.Bmp",
            "C.F:\\T\\G\\ABC.Bmp",
            "D.F:\\T:\\ABC.Bmp"
        ],
        "answer": "C",
        "hint": "在Windows系统中，文件路径的正确表示方法为F:\\T\\G\\ABC.Bmp。"
    },
    {
        "question": "在查找文件时，通配符*与？的含义是（A）。",
        "options": [
            "A.*表示任意多个字符，？表示任意一个字符",
            "B.？表示任意多个字符，*表示任意一个字符",
            "C.*和？表示乘号和问号",
            "D.查找*.?与?.*的文件是一致的"
        ],
        "answer": "A",
        "hint": "在文件查找中，*代表任意数量的字符，而？代表单个字符。"
    },
    {
        "question": "Windows的“系统工具”主要有（A）。",
        "options": [
            "A.备份、磁盘清理、磁盘碎片整理程序等",
            "B.ARJ压缩程序、BACKUP\\RESTORE命令、PCTOOLS命令等",
            "C.磁盘压缩程序、磁盘修复程序、PCTOOLS等",
            "D.传真程序、备份工具、磁盘管理工具等"
        ],
        "answer": "A",
        "hint": "Windows系统工具中包括备份、磁盘清理、磁盘碎片整理程序等实用工具。"
    },
    {
        "question": "Windows中有很多功能强大的应用程序，其中“磁盘碎片整理程序”的主要用途是（D）。",
        "options": [
            "A.将不小心摔坏的软盘碎片重新整理规划使其重新可用",
            "B.将磁盘的文件碎片删除，释放磁盘空间",
            "C.将进行磁盘碎片整理，并重新格式化",
            "D.将进行磁盘文件碎片整理，提高磁盘的读写速度"
        ],
        "answer": "D",
        "hint": "磁盘碎片整理程序通过重新组织文件碎片，提高磁盘读写速度，延长磁盘使用寿命。"
    },
    {
        "question": "在Windows中，“录音机”程序可执行的文件类型是（D）。",
        "options": [
            "A.*.txt",
            "B.*.doc",
            "C.*.cpp",
            "D.*.wav"
        ],
        "answer": "D",
        "hint": "Windows录音机程序主要用于播放和录制WAV格式的音频文件。"
    },
    {
        "question": "在Windows中，在“声音-录音机”对话框波形框左面的时间表示（B）。",
        "options": [
            "A.总共所需要的时间",
            "B.已经播放的时间",
            "C.剩下要播放的时间",
            "D.显示现在的真实时间"
        ],
        "answer": "B",
        "hint": "波形框左面的时间通常表示已经播放的时间。"
    },
    {
        "question": "鸿蒙系统发布的时间是什么时候（C）。",
        "options": [
            "A.2019年9月9日",
            "B.2019年10月9日",
            "C.2019年8月9日",
            "D.2019年7月9日"
        ],
        "answer": "A",
        "hint": "鸿蒙系统正式发布的时间是2019年8月9日。"
    },
    {
        "question": "手机克隆是哪个手机品牌的备份方式（A）。",
        "options": [
            "A.华为",
            "B.小米",
            "C.魅族",
            "D.vivo"
        ],
        "answer": "A",
        "hint": "手机克隆是华为提供的一种手机数据备份和迁移功能。"
    },
    {
        "question": "安卓手机系统APP的存放目录是（A）。",
        "options": [
            "A./system/app",
            "B./data/app",
            "C./data/data",
            "D./data/system"
        ],
        "answer": "A",
        "hint": "安卓系统中系统应用通常存放在/system/app目录下。"
    },
    {
        "question": "苹果手机通讯录的数据库名字是（A）。",
        "options": [
            "A.AddressBooC.sqlitedb",
            "B.CalendaB.sqlitedb",
            "C.PhotoC.sqlite",
            "D.consolidated.db"
        ],
        "answer": "A",
        "hint": "苹果手机通讯录的数据存储在AddressBooC.sqlitedb数据库中。"
    },
    {
        "question": "在日志文件中，能够查看到一些状态码，表示访问成功的是哪个（A）。",
        "options": [
            "A.200",
            "B.301",
            "C.404",
            "D.500"
        ],
        "answer": "A",
        "hint": "HTTP状态码200表示服务器成功处理了请求并返回了所请求的网页。"
    },
    {
        "question": "HTTPS握手过程中，以下不属于客户端验证证书合法性的是（D）。",
        "options": [
            "A.使用对称加密方式key进行信息交流",
            "B.非对称加密方式key进行交流",
            "C.通过校验证书颁发机构是否受客户端信任",
            "D.验证请求是否得到响应"
        ],
        "answer": "A",
        "hint": "在HTTPS握手过程中，客户端主要使用非对称加密来验证服务器证书的合法性，而不是对称加密。"
    },
    {
        "question": "在redhatlinux系统中，下列哪个命令可以用来激活服务的不同运行级别（D）。",
        "options": [
            "A.Active",
            "B.make",
            "C.turn",
            "D.chkconfig"
        ],
        "answer": "D",
        "hint": "chkconfig命令在RedHatLinux系统中用于管理服务在不同运行级别的启动状态。"
    },
    {
        "question": "在OSI参考模型中，直接为会话层提供服务的是（C）。",
        "options": [
            "A.应用层",
            "B.表示层",
            "C.传输层",
            "D.网络层"
        ],
        "answer": "C",
        "hint": "传输层是OSI模型的第四层，它为上层会话层提供服务。"
    },
    {
        "question": "计算机能直接识别的语言是下（B）。",
        "options": [
            "A.高级程序语言",
            "B.机器语言",
            "C.汇编语言",
            "D.C++语言"
        ],
        "answer": "B",
        "hint": "计算机能直接识别的语言是机器语言，它由二进制代码组成。"
    },
    {
        "question": "加密有对称密钥加密、非对称密钥加密两种,数字签名采用的是（B）。",
        "options": [
            "A.对称密钥加密",
            "B.非对称密钥加密",
            "C.都不是",
            "D.都可以"
        ],
        "answer": "B",
        "hint": "数字签名通常采用非对称密钥加密技术，以确保数据的完整性和认证。"
    },
    {
        "question": "E01的块数据校验采用（A）。",
        "options": [
            "A.CRC算法",
            "B.MD5算法",
            "C.SHA-1算法",
            "D.SHA-2算法"
        ],
        "answer": "A",
        "hint": "E01格式是一种用于存储数字证据的格式，它的块数据校验通常采用CRC算法。"
    },
    {
        "question": "关于对扣押的原始存储介质的处理，下列说法正确的是（D）。",
        "options": [
            "A.扣押的原始存储介质在切断电源后，无需封存",
            "B.扣押的原始存储介质中的电子数据，可以进行修改",
            "C.扣押的原始存储介质封存后，保证在不解除封存状态的情况下，可以使用或者启动原始存储介质",
            "D.扣押的原始存储介质封存后，保证在不解除封存状态的情况下，无法使用或者启动被封存的原始存储介质"
        ],
        "answer": "D",
        "hint": "扣押的原始存储介质应当在封存后保证无法使用或启动，以保护电子数据的完整性。"
    },
    {
        "question": "下列关于手机取证，说法正确的是（B）。",
        "options": [
            "A.所有安卓手机不用ROOT权限就可以提取全部数据",
            "B.在手机取证时，封存手机应该马上关闭手机外部连接，以保证手机数据的安全性",
            "C.手机外置存储卡中通常不会存放有用的数据，可以不用对其做取证操作",
            "D.以上说法都不对"
        ],
        "answer": "B",
        "hint": "在手机取证时，封存手机并关闭外部连接是确保数据安全的重要步骤。"
    },
    {
        "question": "以下不属于电子证据特点的是（D）。",
        "options": [
            "A.电子证据的脆弱性",
            "B.电子证据的隐蔽性",
            "C.电子证据的不可挽救性",
            "D.电子证据对系统的依赖性"
        ],
        "answer": "C",
        "hint": "电子证据通常可以被恢复，因此并非不可挽救。"
    },
    {
        "question": "下列不属于数据库的特点的是（C）。",
        "options": [
            "A.数据按一定的数据模型组织，描述和储存",
            "B.可为各种用户共享",
            "C.冗余度较大",
            "D.数据独立性较高"
        ],
        "answer": "C",
        "hint": "数据库的设计旨在减少冗余，提高数据的一致性和完整性。"
    },
    {
        "question": "下列关于基于文件签名恢复，错误的是（A）。",
        "options": [
            "A.文件签名包含文件的开头和结尾，所以很容易找到文件的起止存储位置，从而完整地恢复出来整个文件。",
            "B.被删除的文件在磁盘上可以不连续存储",
            "C.被删除的文件，常存在于未分配的磁盘空间中",
            "D.对于只有头部没有尾部签名的文件，也可能被恢复"
        ],
        "answer": "A",
        "hint": "文件签名通常只包含文件的头部信息，而不是开头和结尾，因此不能仅凭签名来确定文件的完整存储位置。"
    },
    {
        "question": "Android微信朋友圈数据是以（C）格式保存的。",
        "options": [
            "A.protoBuf",
            "B.plist",
            "C.sqlite数据库",
            "D.文本格式"
        ],
        "answer": "C",
        "hint": "微信朋友圈的数据通常存储在SQLite数据库中，这是一种轻量级的数据库系统。"
    },
    {
        "question": "异或加密算法是一种常用的简单加密算法，设置异或秘钥为“0xFF”，依次对明文“gasstest”进行加密，则相应的密文为（C）。",
        "options": [
            "A.gasstest",
            "B.0x67876A6A70726A70",
            "C.0x979A7E7E7F8A7E7F",
            "D.0x989E8C8C8B9A8C8B"
        ],
        "answer": "D",
        "hint": "异或操作会根据秘钥'0xFF'对明文'gasstest'进行逐位异或，生成相应的密文。"
    },
    {
        "question": "某公司的上班时间为上午的9点至12点，下午1点至6点，每次系统备份需要约1个半小时，下列适合作为系统数据备份的时间为（C）。",
        "options": [
            "A.上午8点",
            "B.中午12点",
            "C.下午5点",
            "D.凌晨12点"
        ],
        "answer": "D",
        "hint": "考虑到备份需要1个半小时，且不能在工作时间进行，选择在凌晨12点进行备份较为合适。"
    },
    {
        "question": "适用于查找有序单链表的方法是（B）。",
        "options": [
            "A.二分查找",
            "B.顺序查找",
            "C.树表查找",
            "D.斐波那契查找"
        ],
        "answer": "B",
        "hint": "在单链表中，由于节点的存储不是连续的，所以只能采用顺序查找。"
    },
    {
        "question": "以下哪种排序算法空间复杂度最高（D）。",
        "options": [
            "A.堆排序",
            "B.插入排序",
            "C.希尔排序",
            "D.归并排序"
        ],
        "answer": "D",
        "hint": "归并排序需要额外的空间来存储合并过程中的元素，因此它的空间复杂度相对较高。"
    },
    {
        "question": "在linux下使用Volatility对内存进行取证分析时，打印arp的命令（A）。",
        "options": [
            "A.linux_arp",
            "B.arp",
            "C.print_arp",
            "D.show_arp"
        ],
        "answer": "A",
        "hint": "在Linux版本的Volatility中，打印ARP表的命令是'linux_arp'。"
    },
    {
        "question": "以下哪个命令可以获取容器的详细信息（B）。",
        "options": [
            "A.docker ps",
            "B.docker info",
            "C.docker inspect",
            "D.docker stats"
        ],
        "answer": "C",
        "hint": "dockerinspect命令可以显示容器的详细配置信息和状态。"
    },
    {
        "question": "grep语法以下哪个参数可以忽略大小写（D）。",
        "options": [
            "A.nocase",
            "B.o",
            "C.n",
            "D.i"
        ],
        "answer": "D",
        "hint": "-i参数在grep命令中用于忽略大小写的搜索。"
    },
    {
        "question": "Linux下MYSQL启动时加载的配置是（B）。",
        "options": [
            "A.mysql.ini",
            "B.mysql.cnf",
            "C.my.ini",
            "D.my.cnf"
        ],
        "answer": "B",
        "hint": "MySQL在Linux系统启动时通常加载的是my.cnf配置文件。"
    },
    {
        "question": "安卓手机可以通过多次点击（B）来打开开发者模式。",
        "options": [
            "A.安卓版本",
            "B.版本",
            "C.IMEI",
            "D.EMUI版本",
        ],
        "answer": "B",
        "hint": "在安卓设备上，通常通过多次点击'版本'来打开开发者模式。"
    },
    {
        "question": "使用华为手机助手进行数据备份，备份的密码信息存储在以下哪个文件中（B）。",
        "options": [
            "A.datainfo.ini",
            "B.backupinfo.ini",
            "C.datainfo.dat",
            "D.backupinfo.dat"
        ],
        "answer": "B",
        "hint": "华为手机助手备份的数据，包括密码信息，通常存储在backupinfo.ini文件中。"
    },
    {
        "question": "根据apk加固发展历程来看，最早的apk加固技术是哪个（A）。",
        "options": [
            "A.指令抽离",
            "B.动态加载",
            "C.指令转换",
            "D.虚拟机源码保护"
        ],
        "answer": "A",
        "hint": "指令抽离是早期的APK加固技术之一，它通过修改应用代码来隐藏敏感逻辑。"
    },
    {
        "question": "下列关于基于文件签名恢复，错误的是（A）。",
        "options": [
            "A.文件签名包含文件的开头和结尾，所以很容易找到文件的起止存储位置，从而完整地恢复出来整个文件。",
            "B.被删除的文件在磁盘上可以不连续存储",
            "C.被删除的文件，常存在于未分配的磁盘空间中",
            "D.对于只有头部没有尾部签名的文件，也可能被恢复"
        ],
        "answer": "A",
        "hint": "文件签名通常只包含文件的头部信息，而不是开头和结尾，因此不能仅凭签名来确定文件的完整存储位置。"
    },
    {
        "question": "手机无法与分析机正常连接的原因是（D）。",
        "options": [
            "A.手机驱动问题",
            "B.手机通讯模式问题",
            "C.手机数据线问题",
            "D.以上都是"
        ],
        "answer": "D",
        "hint": "手机无法与分析机正常连接可能由多种原因引起，包括驱动问题、通讯模式问题或数据线问题。"
    },
    {
        "question": "开盘维修硬盘需要的环境为（B）。",
        "options": [
            "A.真空室",
            "B.无尘室",
            "C.氧气室",
            "D.自然室"
        ],
        "answer": "B",
        "hint": "开盘维修硬盘需要在无尘室环境中进行，以防止灰尘等污染物对硬盘造成损害。"
    },
    {
        "question": "NFTS系统格式中的文件变为64k主要是因为（B）。",
        "options": [
            "A.MFT表损坏",
            "B.BPB表损坏",
            "C.DBR表损坏",
            "D.MFTMIRR表损坏"
        ],
        "answer": "A",
        "hint": "MFT（MasterFileTable）表损坏可能导致文件系统无法正确读取文件大小，显示为默认的64KB。"
    },
    {
        "question": "因为分区索引目录丢失的数据应该使用哪种扫描方式恢复数据（C）。",
        "options": [
            "A.使用索引扫描方式",
            "B.使用误格式化扫描方式",
            "C.使用MFT扫描方式",
            "D.使用数据区扫描方式"
        ],
        "answer": "D",
        "hint": "当分区索引目录丢失时，可以使用数据区扫描方式来恢复数据，这种方式不依赖于文件系统的结构。"
    },
    {
        "question": "jpg图片底层中，缩略图的头部代码是（B）。",
        "options": [
            "A.FFD4",
            "B.FFD8",
            "C.FFD9",
            "D.FFD5"
        ],
        "answer": "B",
        "hint": "在JPEG图像文件中，缩略图通常以FFD8作为起始标记。"
    },
    {
        "question": "MBR一般从硬盘哪个扇区开始（C）。",
        "options": [
            "A.63",
            "B.32",
            "C.0",
            "D.1"
        ],
        "answer": "C",
        "hint": "MBR（MasterBootRecord）通常位于硬盘的第一个扇区，即扇区0。"
    },
    {
        "question": "WD（西数）硬盘的型号为WD200EB-00CPF0，它的容量为（C）。",
        "options": [
            "A.2G",
            "B.20G",
            "C.200G",
            "D.2000G"
        ],
        "answer": "C",
        "hint": "根据硬盘型号WD200EB-00CPF0，可以推断出其容量为200GB。"
    },
    {
        "question": "在数据库系统中，对存取权限的定义称为（B）。",
        "options": [
            "A.命令",
            "B.授权",
            "C.定义",
            "D.审计"
        ],
        "answer": "B",
        "hint": "在数据库中，授权（Grant）是指赋予用户或角色执行特定操作的权限。"
    },
    {
        "question": "当对用户授予对象权限时，使用（A）从句表示允许得到权限的用户进一步将这些权限授予给其他用户或角色。",
        "options": [
            "A.withgrantoption",
            "B.withrevokeoption",
            "C.withadminoption",
            "D.withgrantadmin"
        ],
        "answer": "A",
        "hint": "WITHGRANTOPTION子句允许用户将他们收到的权限再授予给其他用户。"
    },
    {
        "question": "建立会话的角色为（A）。",
        "options": [
            "A.CREATESESSION",
            "B.CREATESEQUENCE",
            "C.CREATECLUSTER",
            "D.CREATEVIEW"
        ],
        "answer": "A",
        "hint": "CREATESESSION是SQL命令，用于在数据库中建立一个新的会话。"
    },
    {
        "question": "一个事务的执行，要么全部完成，要么全部不做，一个事务中对数据库的所有操作都是一个不可分割的操作序列的属性是（A）。",
        "options": [
            "A.原子性",
            "B.一致性",
            "C.独立性",
            "D.持久性"
        ],
        "answer": "A",
        "hint": "原子性是事务的基本特征之一，意味着事务中的所有操作要么全部执行，要么全部不做。"
    },
    {
        "question": "日志文件是用于记录（C）。",
        "options": [
            "A.程序运行过程",
            "B.程序执行代码",
            "C.对数据库的更新操作",
            "D.程序执行的结果"
        ],
        "answer": "C",
        "hint": "日志文件用于记录对数据库进行的更新操作，帮助跟踪数据库的变更历史。"
    },
    {
        "question": "下列不属于数据库恢复策略与方法的是（D）。",
        "options": [
            "A.事务故障的恢复",
            "B.系统故障的恢复",
            "C.介质故障的恢复",
            "D.应用程序故障的恢复"
        ],
        "answer": "D",
        "hint": "数据库恢复策略通常针对事务故障、系统故障和介质故障，不包括应用程序故障。"
    },
    {
        "question": "电子物证软件一致性检验中，判断软件相同的依据是（B）。",
        "options": [
            "B.十六进制",
            "C.hash",
            "D.文件名",
            "U.软件功能"
        ],
        "answer": "C",
        "hint": "在电子物证检验中，软件的一致性通常通过比较软件的哈希值来判断。"
    },
    {
        "question": "哪项不是电子数据法庭科学鉴定的原则（A）。",
        "options": [
            "A.及时性原则",
            "B.依法原则",
            "C.证据原始性原则",
            "D.完整性原则"
        ],
        "answer": "A",
        "hint": "电子数据法庭科学鉴定的原则包括依法原则、证据原始性原则和完整性原则，但不包括及时性原则。"
    },
    {
        "question": "https: //urD.cn/5x3d5Su这个域名是（C）。",
        "options": [
            "A.三级域名",
            "B.IP地址",
            "C.长链接转换后的短链接",
            "D.子域名"
        ],
        "answer": "C",
        "hint": "https: //urD.cn/5x3d5Su是一个长链接转换后的短链接，用于缩短URL地址。"
    },
    {
        "question": "以下哪些信息不包含在Whois信息中（A）。",
        "options": [
            "A.URL注册商",
            "B.URL注册人及电话",
            "C.URL注册时间及过期时间",
            "D.URL注册地址"
        ],
        "answer": "D",
        "hint": "Whois信息通常包含域名注册商、注册人信息、注册时间和过期时间，但不包括注册地址。"
    },
    {
        "question": "网址http: //www.abc.coA.cn的一级域名是（C）。",
        "options": [
            "A.http: //www.abc.coA.cn",
            "B.www.abc.coA.cn",
            "C.abc.coA.cn",
            "D.coA.cn"
        ],
        "answer": "D",
        "hint": "一级域名是.coA.cn，它位于域名的最后部分，表示顶级域。"
    },
    {
        "question": "分析涉网新型案件涉案APK时，客服的调证的关键信息主要是在哪一步查找的（C）。",
        "options": [
            "A.静态分析",
            "B.动态分析",
            "C.代码分析",
            "D.解压缩分析"
        ],
        "answer": "D",
        "hint": "解压缩分析可以帮助调查人员获取APK文件中的资源文件，其中可能包含客服信息。"
    },
    {
        "question": "涉网新型案件涉案APP的犯罪主网站可以通过以下哪种方法获取到（C）。",
        "options": [
            "A.静态分析",
            "B.动态分析",
            "C.动态分析和静态分析都可以",
            "D.动态分析和静态分析都不行"
        ],
        "answer": "C",
        "hint": "犯罪主网站的信息可以通过静态分析和动态分析两种方法来获取。"
    },
    {
        "question": "dcloud是哪个打包公司的特征（C）。",
        "options": [
            "A.北京柚子科技",
            "B.成都美洽",
            "C.北京数字天堂",
            "D.小美客服"
        ],
        "answer": "A",
        "hint": "dcloud是北京柚子科技有限公司的产品，该公司提供移动应用开发和打包服务。"
    },
    {
        "question": "apicloud是哪个打包公司的特征（A）。",
        "options": [
            "A.北京柚子科技",
            "B.成都美洽",
            "C.北京数字天堂",
            "D.小美客服"
        ],
        "answer": "B",
        "hint": "apicloud是成都美洽科技有限公司的产品，提供移动应用开发和打包服务。"
    },
    {
        "question": "对APK静态分析不包含以下哪些数据（D）。",
        "options": [
            "A.权限列表",
            "B.签名证书",
            "C.打包公司",
            "D.内嵌的收款账号"
        ],
        "answer": "D",
        "hint": "静态分析通常不涉及应用运行时的数据，如内嵌的收款账号这类信息。"
    },
    {
        "question": "关于第三方客服，以下说法错误的是（B）。",
        "options": [
            "A.APK或涉案主网站中的第三方客服有可能是嫌疑人或关联团伙自行搭建的",
            "B.只能通过第三方客服的id进行调证",
            "C.第三方客服调证数据包含的关键信息包括嫌疑人付款方式及账号",
            "D.第三方客服信息可以通过APK静态分析获取"
        ],
        "answer": "B",
        "hint": "第三方客服的调证不仅可以通过id进行，还可以通过其他相关信息和数据。"
    },
    {
        "question": "关于分发平台以下说法错误的是（A）。",
        "options": [
            "A.分发平台只提供APK下载服务",
            "B.有些分发平台是嫌疑人自己搭建的",
            "C.分发平台源自于APP测试用途",
            "D.对分发平台的服务器进行分析能获取到上传者相关信息"
        ],
        "answer": "A",
        "hint": "分发平台除了提供APK下载服务外，还可以有其他功能，如应用测试、用户反馈等。"
    },
    {
        "question": "一般涉案APP中不会有以下哪种信息（D）。",
        "options": [
            "A.网站域名",
            "B.第三方SDK",
            "C.第三方客服",
            "D.嫌疑人姓名"
        ],
        "answer": "D",
        "hint": "涉案APP中通常包含网站域名、第三方SDK和第三方客服信息，但不会包含嫌疑人的真实姓名。"
    },
    {
        "question": "以下关于APK静态分析和动态分析的说法正确的是（C）。",
        "options": [
            "A.APK静态分析就是静态反编译，动态分析就是动态反编译",
            "B.APK通过动态分析可以分析出APK的加固信息",
            "C.APK静态分析无法分析到里面的一些客服信息",
            "D.动态分析一定要在互联网的环境下才可以分析的最全面"
        ],
        "answer": "D",
        "hint": "动态分析通常需要在互联网环境下进行，以便捕获网络通信等动态行为。"
    },
    {
        "question": "安卓APK应用中提取的证书HASH,可以用于（B）。",
        "options": [
            "A.发起调证",
            "B.应用关联",
            "C.进行HASH破解，解密出明文密码",
            "D.在应用里进行用户登录时使用"
        ],
        "answer": "B",
        "hint": "APK中的证书HASH可以用来关联应用和开发者，确认应用的来源。"
    },
    {
        "question": "办案人员通过以下哪种软件能够直接远程连接到涉案主机中的数据库并进行数据固定操作（C）。",
        "options": [
            "A.Xshell",
            "B.Xftp",
            "C.Navicat",
            "D.Putty"
        ],
        "answer": "C",
        "hint": "Navicat是一款数据库管理工具，可以远程连接并操作数据库。"
    },
    {
        "question": "以下哪种主机不具有独立的操作系统（A）。",
        "options": [
            "A.云虚拟主机",
            "B.独立服务器",
            "C.云主机",
            "D.VPS"
        ],
        "answer": "A",
        "hint": "云虚拟主机通常与其他用户共享操作系统，而不是拥有独立的操作系统。"
    },
    {
        "question": "在对CentOS7.0系统的服务器进行远程勘验的时候，以下哪个命令能够确认服务器的当前时间（C）。",
        "options": [
            "A.last",
            "B.time",
            "C.date",
            "D.data"
        ],
        "answer": "C",
        "hint": "date命令在Linux系统中用于显示或设置系统的日期和时间。"
    },
    {
        "question": "在对CentOS7.0系统的服务器进行远程勘验的时候，以下哪个命令能够确认服务器历史登录用户及其时间（A）。",
        "options": [
            "A.who",
            "B.last",
            "C.lastb",
            "D.lsblk"
        ],
        "answer": "B",
        "hint": "last命令在Linux系统中用于显示用户的登录历史，包括登录和注销时间。"
    },
    {
        "question": "在对CentOS7.0系统的服务器进行远程勘验的时候，以下哪个命令可以查看到当前登录到系统中的用户（A）。",
        "options": [
            "A.Who",
            "B.Find",
            "C.name",
            "D.connect"
        ],
        "answer": "A",
        "hint": "who命令在Linux系统中用于显示当前登录到系统中的所有用户。"
    },
    {
        "question": "Windows2008系统服务器存在webIIS服务，其默认网站的主目录的本地地址一般为（D）。",
        "options": [
            "A.C:\\\\wint",
            "B.C:\\\\wwwroot",
            "C.C:\\\\inetpub",
            "D.C:\\\\inetpub\\\\wwwroot"
        ],
        "answer": "D",
        "hint":"IIS（InternetInformationServices）的默认网站主目录通常位于inetpub/wwwroot。"
    },
        {   
            "question": "在对Windows2008系统的服务器进行远程勘验的时候，运行窗口输入以下哪个命令能够打开事件查看器（C）。",
            "options": [
                "A.dcomcnfg",
                "B.control",
                "C.eventvwB.msc",
                "D.dpiscaling"
            ],
            "answer": "C",
            "hint": "eventvwB.msc是打开Windows事件查看器的命令。"
        },
        {
            "question": "以下那个端口号被默认用作宝塔面板登陆端口（D）。",
            "options": [
                "A.80",
                "B.443",
                "C.8080",
                "D.8888"
            ],
            "answer": "D",
            "hint": "宝塔面板默认使用8888端口作为Web管理端口。"
        },
        {
            "question": "无法扣押原始存储介质的，可以提取电子数据，但应当在笔录中注明不能扣押原始存储介质的原因、原始存储介质的存放地点或者电子数据的来源等情况，并计算电子数据的（B）。",
            "options": [
                "A.MD5",
                "B.完整性校验值",
                "C.哈希值",
                "D.SHA1"
            ],
            "answer": "B",
            "hint": "在无法扣押原始存储介质时，应当计算电子数据的完整性校验值以确保数据的完整性。"
        },
        {
            "question": "完整性校验值，是指为防止电子数据被篡改或者破坏，使用（B）等特定算法对电子数据进行计算，得出的用于校验数据完整性的数据值。",
            "options": [
                "A.RSA加密演算法",
                "B.散列算法",
                "C.RANSAC算法",
                "D.离散傅里叶变换"
            ],
            "answer": "B",
            "hint": "散列算法，如MD5、SHA-1等，常用于生成电子数据的完整性校验值。"
        },
        {
            "question": "职业活动中要想树立艰苦奋斗的品质，下列做法不正确的是(D)。",
            "options": [
                "A.正确理解艰苦奋斗的内涵",
                "B.树立不怕困难的精神",
                "C.永远保持艰苦奋斗的作风",
                "D.过苦日子"
            ],
            "answer": "D",
            "hint": "艰苦奋斗并不意味着必须过苦日子，而是在面对困难和挑战时保持坚韧不拔的精神。"
        },
        {
            "question": "对于一个企业的员工来说，企业的“高压线”、“禁区”指的是(D)。",
            "options": [
                "A.职业良知",
                "B.上级命令",
                "C.群众要求",
                "D.职业纪律"
            ],
            "answer": "D",
            "hint": "企业的“高压线”、“禁区”通常指的是必须遵守的职业纪律和规章制度。"
        },
        {
            "question": "在职业生活中，从业人员是否践行诚实守信，应(C)。",
            "options": [
                "A.看上司的意见而定",
                "B.看对自己是否有利而定",
                "C.是无条件的",
                "D.视对方是否诚信而定"
            ],
            "answer": "C",
            "hint": "诚实守信是从业人员应无条件遵守的职业准则。"
        },
        {
            "question": "奉献的本质属性是（B）。",
            "options": [
                "A.非功利性",
                "B.可为性",
                "C.止损性",
                "D.普遍性"
            ],
            "answer": "B",
            "hint": "奉献的本质是非功利性的，即不以追求个人利益为目的。"
        },
        {
            "question": "在计算机网络中，LAN指的是（A）。",
            "options": [
                "A.局域网",
                "B.广域网",
                "C.城域网",
                "D.以太网"
            ],
            "answer": "A",
            "hint": "LAN是LocalAreaNetwork的缩写，指的是局域网。"
        },
        {
            "question": "下面说法不正确的是（D）。",
            "options": [
                "A.二进制和其他进制可以直接转换",
                "B.十进制和其他进制可以直接转换",
                "C.八进制和其他进制可以直接转换",
                "D.八进制和十六机制不能直接转换"
            ],
            "answer": "D",
            "hint": "八进制和十六进制之间可以直接转换，因为它们之间存在简单的数学关系。"
        },
        {
            "question": "反应计算机存储容量的基本单位是（B）。",
            "options": [
                "A.位",
                "B.字节",
                "C.字",
                "D.双字"
            ],
            "answer": "B",
            "hint": "字节是计算机存储容量的基本单位，表示8位二进制数。"
        },
        {
            "question": "断电会使原存信息丢失的存储器是（A）。",
            "options": [
                "A.RAM",
                "B.硬盘",
                "C.ROM",
                "D.U盘"
            ],
            "answer": "A",
            "hint": "RAM（随机存取存储器）是易失性存储器，断电后存储的信息会丢失。"
        },
        {
            "question": "计算机存储器是一种（D）。",
            "options": [
                "A.运算部件",
                "B.输入部件",
                "C.输出部件",
                "D.记忆部件"
            ],
            "answer": "D",
            "hint": "计算机存储器的主要功能是存储信息，因此它是计算机的记忆部件。"
        },
        {
            "question": "与十六进制(BC)等值的二进制数是（B）。",
            "options": [
                "A.10111011",
                "B.10111100",
                "C.11001100",
                "D.11001011"
            ],
            "answer": "B",
            "hint": "十六进制的BC转换为二进制是10111100。"
        },
        {
            "question": "根据《网络安全法》的规定，（A）应当为公安机关、国家安全机关依法维护国家安全和侦查犯罪的活动提供技术支持和协助。",
            "options": [
                "A.网络运营商",
                "B.网络合作商",
                "C.电信企业",
                "D.电信科研机构"
            ],
            "answer": "A",
            "hint": "网络运营商在《网络安全法》中承担着为公安机关和国家安全机关提供技术支持和协助的义务。"
        },
        {
            "question": "集体合同法立法最早的国家是（C）。",
            "options": [
                "A.荷兰",
                "B.芬兰",
                "C.新西兰",
                "D.爱尔兰"
            ],
            "answer": "C",
            "hint": "新西兰是最早进行集体合同法立法的国家之一。"
        },
        {
            "question": "竞业限制的人员限于用人单位的（D）、高级技术人员和其他负有保密义务的人员。",
            "options": [
                "A.管理人员",
                "B.一般管理人员",
                "C.中层管理人员",
                "D.高级管理人员"
            ],
            "answer": "D",
            "hint": "竞业限制通常适用于高级管理人员、高级技术人员等关键岗位人员。"
        },
        {
            "question": "《劳动合同法》调整的劳动关系是一种（C）。",
            "options": [
                "A.人身关系",
                "B.财产关系",
                "C.人身关系和财产关系相结合的社会关系",
                "D.经济关系"
            ],
            "answer": "C",
            "hint": "《劳动合同法》调整的劳动关系既包括人身关系也包括财产关系，是一种社会关系。"
        },
        {
            "question": "网络产品、服务应当符合相关国家标准的（C）要求。",
            "options": [
                "A.规范性",
                "B.建议性",
                "C.强制性",
                "D.自觉性"
            ],
            "answer": "C",
            "hint": "网络产品和服务必须遵守国家相关强制性标准，以确保安全和合规。"
        },
        {
            "answer": "D",
            "hint": "《中华人民共和国数据安全法》自2021年9月1日起施行。"
        },
        {
            "question": "手机克隆是哪个手机品牌的备份方式（A）。",
            "options": [
                "A.华为",
                "B.小米",
                "C.魅族",
                "D.vivo"
            ],
            "answer": "A",
            "hint": "手机克隆是华为提供的一种手机数据备份和迁移功能。"
        },
        {
            "question": "关于对扣押的原始存储介质的处理，下列说法正确的是（B）。",
            "options": [
                "A.扣押的原始存储介质在切断电源后，无需封存",
                "B.扣押的原始存储介质中的电子数据，可以进行修改",
                "C.扣押的原始存储介质封存后，保证在不解除封存状态的情况下，可以使用或者启动原始存储介质",
                "D.扣押的原始存储介质封存后，保证在不解除封存状态的情况下，无法使用或者启动被封存的原始存储介质"
            ],
            "answer": "D",
            "hint": "扣押的原始存储介质应当封存，确保在封存状态下无法被使用或启动，以保护电子数据的完整性。"
        },
        {
            "question": "下面不属于内存镜像工具的是（B）。",
            "options": [
                "A.moontools",
                "B.FTKimager",
                "C.Dumplt",
                "D.Volatility"
            ],
            "answer": "C",
            "hint": "Dumplt并不是一个内存镜像工具，而是一个用于内存分析的工具。"
        },
        {
            "question": "USB插拔记录在注册表的那个键值下（A）。",
            "options": [
                "A.HKLM\\\\SYSTEM\\\\CurrentControlSet\\\\Enum",
                "B.HKLM\\\\SYSTEM\\\\CurrentControlSet\\\\Control",
                "C.HKLM\\\\SYSTEM\\\\ControlSet001\\\\Enum",
                "D.以上都不是"
            ],
            "answer": "A",
            "hint": "USB设备的插拔记录通常保存在注册表的枚举分支下。"
        },
        {
            "question": "341、根据《网络安全法》的规定，市级以上地方人民政府有关部门的网络安全保护和监督管理职责，按照国家有关规定确定。（√）",
            "options": ["正确","错误"
                
            ],
            "answer": "A",
            "hint": "该说法符合《网络安全法》的相关规定。"
        },
        {
            "question": "342、网信部门和有关部门在履行网络安全保护职责中获取的信息，用于维护网络安全的需要，也可以用于其他用途。（×）",
            "options": ["正确","错误"
                
            ],
            "answer": "B",
            "hint": "网信部门和有关部门获取的信息应当严格保密，不能用于除网络安全之外的其他用途。"
        },
        {
            "question": "343、在Word中，如果放弃刚刚进行的一个文档内容操作（如粘贴），只需单击工具栏上的撤消按钮即可。（√）",
            "options": ["正确","错误"
                
            ],
            "answer": "A",
            "hint": "Word提供了撤消功能，允许用户撤销最近的操作。"
        },
        {
            "question": "344、Internet上，一台主机可以有多个IP地址。（√）",
            "options": ["正确","错误"
                
            ],
            "answer": "A",
            "hint": "在某些情况下，一台主机确实可以拥有多个IP地址。"
        },
        {
            "question": "345、在INTERNET中'WWW'表示WORLDWIDEWEB。(√）",
            "options": ["正确","错误"
                
            ],
            "answer": "A",
            "hint": "'WWW'是WorldWideWeb的缩写，指的是全球信息网。"
        },
        {
            "question": "346、硬盘在存储数据之前，一般需要经过低级格式化，分区和高级格式化这三个步骤之后才能使用，其作用是在物理硬盘上建立一定的数据逻辑结构。（√）",
            "options": ["正确","错误"
                
            ],
            "answer": "A",
            "hint": "硬盘在使用前通常需要经过这三个步骤来准备存储数据。"
        },
        {
            "question": "347、传统硬盘由很多盘片组成，每个盘片被划分为若干个同心圆，称为柱面。（√）",
            "options": ["正确","错误"
                
            ],
            "answer": "A",
            "hint": "传统硬盘的物理结构确实包含多个盘片，每个盘片上有多个同心圆的磁道，组成柱面。"
        },
        {
            "question": "348、哈希碰撞（冲突）是可以避免的。（×）",
            "options": ["正确","错误"
                
            ],
            "answer": "B",
            "hint": "哈希碰撞是不可避免的，但可以通过设计良好的哈希函数和冲突解决策略来最小化。"
        },
        {
            "question": "349、记录苹果手机最后备份信息的文件是com.apple.MobileBackup。（√）",
            "options": ["正确","错误"
                
            ],
            "answer": "A",
            "hint": "com.apple.MobileBackup文件用于存储苹果手机备份的相关信息。"
        },
        {
            "question": "350、磁盘克隆仅能复制可见的文件。（×）",
            "options": ["正确","错误"
                
            ],
            "answer": "B",
            "hint": "磁盘克隆可以复制包括隐藏文件和系统文件在内的所有数据。"
        },
        {
            "question": "351、文件复制功能一样可以复制被删除的文件。（×）",
            "options": ["正确","错误"
                
            ],
            "answer": "B",
            "hint": "文件复制功能通常只能复制当前存在于存储介质上的文件，不能复制已被删除的文件。"
        },
        {
            "question": "352、图片被删除，ThumbC.db中将不可能保存着该图片的缩略图。（×）",
            "options": ["正确","错误"
                
            ],
            "answer": "B",
            "hint": "ThumbC.db是Windows系统中的缩略图缓存文件，如果图片被删除前已经生成了缩略图，该缩略图可能仍会保存在ThumbC.db中。"
        },
        {
            "question": "353、base64编码文本可以用于隐写数据。（√）",
            "options": ["正确","错误"
                
            ],
            "answer": "A",
            "hint": "Base64编码可以将数据隐藏在看似普通的文本中，用于隐写术。"
        },
        {
            "question": "354、磁盘克隆可以达到逐磁道、逐扇区、物理级的数据精确复制。（√）",
            "options": ["正确","错误"
                
            ],
            "answer": "A",
            "hint": "磁盘克隆可以精确复制磁盘上的所有数据，包括操作系统、应用程序和用户文件。"
        },
        {
            "question": "355、未分配空间和可用空间是一样的磁盘区域。（×）",
            "options": ["正确","错误"
                
            ],
            "answer": "B",
            "hint": "未分配空间是指在磁盘上尚未划分的区域，而可用空间是指已经划分但当前未被使用的区域。"
        },
        {
            "question": "356、华为手机和荣耀手机都可以使用华为助手进行备份。（√）",
            "options": ["正确","错误"
                
            ],
            "answer": "A",
            "hint": "华为助手支持华为和荣耀手机的数据备份。"
        },
        {
            "question": "357、手机取证的对象除机身存储外，还包括SIM卡、存储卡、备份文件等。（√）",
            "options": ["正确","错误"
                
            ],
            "answer": "A",
            "hint": "手机取证需要全面考虑机身存储以及SIM卡、存储卡和备份文件等所有可能存储数据的部分。"
        },
        {
            "question": "358、彩虹表本质上属于穷举法。（√）",
            "options": ["正确","错误"
                
            ],
            "answer": "A",
            "hint": "彩虹表是一种通过预先计算和存储哈希值来加速哈希碰撞搜索的方法，本质上是一种穷举法。"
        },
        {
            "question": "359、队列的特点是先进先出。（√）",
            "options": ["正确","错误"
                
            ],
            "answer": "A",
            "hint": "队列是一种FIFO（First-In-First-Out）的数据结构。"
        },
        {
            "question": "360、链表占用空间不大。（×）",
            "options": ["正确","错误"
                
            ],
            "answer": "B",
            "hint": "错误的哦。"
        },
        {
"question": "361、 网络运营者应当对其收集的用户信息严格保密,并建立健全用户信息保护制度。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "根据网络安全法，网络运营者对其收集的用户信息负有保密义务，并需要建立信息保护制度。"
},
{
"question": "362、 网信部门和有关部门在履行网络安全保护职责中获取的信息,用于维护网络安全的需要,也可以用于其他用途。(×)",
"options": [
    "正确",
    "错误"
],
"answer": "B",
"hint": "网络安全法规定，网信部门和有关部门在履行网络安全保护职责中获取的信息，不应用于维护网络安全之外的用途。"
},
{
"question": "363、 根据网络安全法的规定,大众传播媒介应当有针对性地面向社会进行网络安全宣传教育。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "网络安全法要求，大众传播媒介应积极宣传网络安全知识，增强公众的网络安全意识。"
},
{
"question": "364、 国家制定并不断完善网络安全战略,明确保障网络安全的基本要求和主要目标,提出重点领域的网络安全政策、工作任务和措施。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "国家层面应制定和完善网络安全战略，明确基本要求和目标，以确保网络安全。"
},
{
"question": "365、 根据网络安全法的规定,市级以上地方人民政府有关部门的网络安全保护和监督管理职责,按照国家有关规定确定。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "网络安全法规定，市级以上地方人民政府需按照国家有关规定履行网络安全职责。"
},
{
"question": "366、 齐家、治国、平天下的先决条件是诚信。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "传统文化认为，诚信是治家、治国、平天下的重要基础。"
},
{
"question": "367、 存储、处理涉及国家秘密信息的网络的运行安全保护，除应当遵守《网络安全法》外，还应当遵守保密法律、行政法规的规定。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "处理国家秘密信息的网络除了遵守网络安全法，还需遵守保密相关法律法规。"
},
{
"question": "368、 国家网信部门会同国务院有关部门制定、公布网络关键设备和网络安全专用产品目录，并推动安全认证和安全检测结果互认，避免重复认证、检测。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "国家网信部门和国务院有关部门共同制定并公布网络设备目录，推动安全认证结果互认。"
},
{
"question": "369、 MAC 地址是逻辑地址。(×)",
"options": [
    "正确",
    "错误"
],
"answer": "B",
"hint": "MAC 地址是设备的物理地址，不是逻辑地址。"
},
{
"question": "370、 一个 A 类 IP 地址最多可容纳 1677216 主机。(×)",
"options": [
    "正确",
    "错误"
],
"answer": "B",
"hint": "A类 IP 地址最多可容纳 16777214 主机。"
},
{
"question": "371、 微机断电后，机器内部的计时系统将停止工作。(×)",
"options": [
    "正确",
    "错误"
],
"answer": "B",
"hint": "微机内部有电池供电的计时系统，即使断电也会继续工作。"
},
{
"question": "372、 U 盘的存储容量为 2GB，那么它可以存储 1GB 个汉字。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "汉字一般占用2个字节，2GB U盘理论上可以存储1GB个汉字。"
},
{
"question": "373、 无法复制的电子证据，可通过截取屏幕图像、拍照、录像、打印等方式固定提取。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "对于无法复制的电子证据，可以用截屏、拍照等方式固定证据。"
},
{
"question": "374、 远程勘验笔录当中不需要见证人签字。(×)",
"options": [
    "正确",
    "错误"
],
"answer": "B",
"hint": "远程勘验笔录需要见证人签字确认。"
},
{
"question": "375、 封存前后应当拍摄被封存原始电子物证的照片。照片应当反映原始电子物证封存前后的状况，清晰反映封口或者张贴封条处的状况。必要时，照片还要清晰反映电子设备的内部存储介质的细节，如序列号、日期等。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "封存电子物证前后需拍照，记录详细信息包括存储介质细节。"
},
{
"question": "376、 现场遇见正在开机的计算机，应该直接关机带回。(×)",
"options": [
    "正确",
    "错误"
],
"answer": "B",
"hint": "现场遇正在开机计算机，不应直接关机，应先进行现场取证处理。"
},
{
"question": "377、 人民法院、人民检察院和公安机关有权依法向有关单位和个人收集、调取电子数据。有关单位和个人应看情况进行提供。(×)",
"options": [
    "正确",
    "错误"
],
"answer": "B",
"hint": "有关单位和个人应当依法提供所需的电子数据，不是“看情况”提供。"
},
{
"question": "378、 认定犯罪嫌疑人、被告人的网络身份与现实身份的同一性，可以通过核查相关 IP 地址、网络活动记录、上网终端归属、相关证人证言以及犯罪嫌疑人、被告人供述和辩解等进行综合判断。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "多种证据综合判断网络身份与现实身份的同一性。"
},
{
"question": "379、 公诉人、当事人或者辩护人、诉讼代理人对电子数据鉴定意见有异议，可以申请人民法院通知鉴定人出庭作证。人民法院认为鉴定人有必要出庭的，鉴定人可以出庭作证。(×)",
"options": [
    "正确",
    "错误"
],
"answer": "B",
"hint": "如果对鉴定意见有异议，人民法院认为需要时，鉴定人必须出庭作证。"
},
{
"question": "380、 误删除桌面上的重要文件后，此种情况在没有其他计算机的情况下是可以远程帮用户恢复数据的。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "可以通过远程操作帮助恢复误删的桌面重要文件。"
},
{
"question": "381、 MBR 硬盘结构一般分区可以分 4 个以上的主分区。(×)",
"options": [
    "正确",
    "错误"
],
"answer": "B",
"hint": "MBR硬盘最多只能有4个主分区。"
},
{
"question": "382、 FAT 格式分区格式化成 FAT 格式，那么通常我们可以恢复出原有的目录和数据。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "相同格式的分区格式化后，可以恢复原有目录和数据。"
},
{
"question": "383、 反编译是指将应用程序文件还原成汇编后者低级语言代码的过程。(×)",
"options": [
    "正确",
    "错误"
],
"answer": "B",
"hint": "反编译（Decompilation）的过程是将机器代码或字节码还原成高级语言源代码的过程。"
},
{
"question": "384、 进行手机设备检验时，以只读接口连接设备。提取 SIM 卡时因芯片特性，要以可读写模式连接 SIM 卡。(×)",
"options": [
    "正确",
    "错误"
],
"answer": "B",
"hint": "SIM 卡的数据提取应使用只读模式，以防数据被修改。"
},
{
"question": "385、 电子数据现场获取时，应保证获取数据的质量，不用考虑造成的影响。(×)",
"options": [
    "正确",
    "错误"
],
"answer": "B",
"hint": "在电子数据现场取证时，必须考虑对现场和数据的保护，不能只顾数据质量。"
},
{
"question": "386、 为了规范数据处理活动，保障数据安全，促进数据开发利用，保护个人、组织的合法权益，维护国家主权、安全和发展利益，制定《数据安全法》。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "《数据安全法》旨在规范数据处理活动及保障数据安全。"
},
{
"question": "387、 《数据安全法》共七章五十六条。(×)",
"options": [
    "正确",
    "错误"
],
"answer": "B",
"hint": "《数据安全法》实际包含七章五十五条。"
},
{
"question": "388、 数据安全，是指通过采取必要措施，确保数据处于有效保护和合法利用的状态，以及具备保障持续安全状态的能力。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "数据安全是指通过措施确保数据的保护和合法使用。"
},
{
"question": "389、 《数据安全法》所称数据，是指任何以文本、电子或者其他方式对信息的记录。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "《数据安全法》中的数据定义包括任何形式的信息记录。"
},
{
"question": "390、 域名不分大小写。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "域名在解析时不区分大小写。"
},
{
"question": "391、 道德就是做好人好事。(×)",
"options": [
    "正确",
    "错误"
],
"answer": "B",
"hint": "道德不仅仅是做好人好事，还包括遵守社会规范和伦理。"
},
{
"question": "392、 我国社会主义道德建设的核心是艰苦奋斗。(×)",
"options": [
    "正确",
    "错误"
],
"answer": "B",
"hint": "我国社会主义道德建设的核心是为人民服务。"
},
{
"question": "393、 微型计算机的更新与发展，主要基于微处理器的变革。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "微型计算机的发展主要依赖于微处理器技术的进步。"
},
{
"question": "394、 CAD 系统是指利用计算机来帮助设计人员进行设计工作的系统。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "CAD系统即计算机辅助设计系统。"
},
{
"question": "395、 在 Word 文档中，进行文本格式化的最小单元是字符。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "Word文档中文本格式化作用的最小单位是字符。"
},
{
"question": "396、 职业道德的特征包括:鲜明的行业性、利益相关性、表现形式的多样性。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "职业道德具有行业特性、利益相关、表现多样等特点。"
},
{
"question": "397、 显示器是由监视器与显示卡两部分组成的。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "显示器包括显示屏和显示卡两部分。"
},
{
"question": "398、 网信部门和有关部门在履行网络安全保护职责中获取的信息，用于维护网络安全的需要，也可以用于其他用途。(×)",
"options": [
    "正确",
    "错误"
],
"answer": "B",
"hint": "网络安全职责中获取的信息，不得用于非网络安全目的。"
},
{
"question": "399、 根据《网络安全法》的规定，有关部门可以对举报人的相关信息予以保密，保护举报人的合法权益。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "《网络安全法》要求对举报人的信息予以保密。"
},
{
"question": "400、 公安机关、国家安全机关因依法维护国家安全或者侦查犯罪的需要调取数据，可以没有批准手续，个人扔应当予以配合。(√)",
"options": [
    "正确",
    "错误"
],
"answer": "A",
"hint": "公安机关、国家安全机关因国家安全或侦查需要调取数据时，个人应依法配合。"
}
];


let currentQuestionIndex = 0;
const optionLetters = ['A', 'B', 'C', 'D'];

// 显示题目和选项
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex] || {};
    document.getElementById('questionNumber').textContent = `题目 ${currentQuestionIndex + 1}`;
    document.getElementById('questionText').textContent = removeAnswerInBrackets(currentQuestion.question || '');

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = `${optionLetters[index]}. ${option.replace(`${optionLetters[index]}.`, '')}`;
        button.addEventListener('click', () => checkAnswer(optionLetters[index]));
        optionsContainer.appendChild(button);
    });
}

// 检查答案
function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer;
    const message = selectedOption === correctAnswer ? '回答正确!' : `回答错误! 提示: ${currentQuestion.hint}`;
    
    if (selectedOption !== correctAnswer) {
        alert(message); // 只有在回答错误时才弹出消息
    }
    console.log(message);

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        updateProgressBarByIndex(currentQuestionIndex);
    } else {
        alert('恭喜，您已完成所有题目！');
    }
}

// 去除所有类型括号内的内容
function removeAnswerInBrackets(text) {
    return text.replace(/[\(\（\[\【\{].*?[\)\）\]\】\}]/g, '');
}

// 更新进度条
function updateProgressBar(progress) {
    if (isNaN(progress) || progress < 0 || progress > 1) return;

    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = `${progress * 100}%`;

    // 根据进度条更新当前显示的问题
    displayQuestionByIndex(Math.floor(progress * questions.length));
}

// 根据索引更新进度条
function updateProgressBarByIndex(index) {
    const progress = index / (questions.length - 1);
    updateProgressBar(progress);
}

// 切换主题模式
function switchTheme() {
    const app = document.getElementById('app');
    app.classList.toggle('night-mode');
    app.classList.toggle('eye-care-mode');
}

// 根据题目索引显示题目
function displayQuestionByIndex(index) {
    if (index >= 0 && index < questions.length) {
        currentQuestionIndex = index;
        displayQuestion();
    } else {
        console.error('提供的索引超出题目范围。');
    }
}

// 绑定按钮点击事件
document.getElementById('previousBtn').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        updateProgressBarByIndex(currentQuestionIndex);
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        updateProgressBarByIndex(currentQuestionIndex);
    }
});

document.getElementById('modeBtn').addEventListener('click', switchTheme);

// 进度条拖动和点击事件处理
let isDragging = false;
const progressBar = document.getElementById('progressBar');
const progressBarContainer = document.getElementById('progressBarContainer');


// 更新进度条和显示问题
function updateProgress(e) {
    const rect = progressBarContainer.getBoundingClientRect();
    const newProgress = (e.clientX - rect.left) / rect.width;
    updateProgressBar(newProgress);
}

progressBarContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    touchStartX = e.clientX;
});

progressBarContainer.addEventListener('touchstart', (e) => {
    isDragging = true;
    touchStartX = e.touches[0].clientX;
});

document.addEventListener('mouseup', (e) => {
    if (isDragging) {
        isDragging = false;
        touchEndX = e.clientX;
        updateProgress(e);
    }
});

document.addEventListener('touchend', (e) => {
    if (isDragging) {
        isDragging = false;
        touchEndX = e.changedTouches[0].clientX;
        updateProgress(e.changedTouches[0]);
    }
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        updateProgress(e);
    }
});

document.addEventListener('touchmove', (e) => {
    if (isDragging) {
        e.preventDefault(); // 防止触摸移动时页面滚动
        updateProgress(e.touches[0]);
    }
});

// 进度条点击事件处理
progressBarContainer.addEventListener('click', (e) => {
    updateProgress(e);
});

// 进度条触摸事件处理
progressBarContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    updateProgress(e.changedTouches[0]);
});


// 页面加载完毕时初始化
window.onload = () => {
    displayQuestion();
    updateProgressBarByIndex(currentQuestionIndex);
};
