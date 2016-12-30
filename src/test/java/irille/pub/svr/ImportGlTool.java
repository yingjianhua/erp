package irille.pub.svr;

import java.util.Vector;

import irille.core.sys.Sys;
import irille.gl.gl.Gl;
import irille.gl.gl.GlSubject;
import irille.gl.gl.GlSubjectDAO;

public class ImportGlTool {
	//导入科目字典
		public static void importGl() {
			Vector<String> v = new Vector();
			v.add("1-101	现金	借	多明细	是	否	否	金额式");
			v.add("1-102	银行存款	借	单明细	是	是	否	金额式");
			v.add("1-10201	银行存款-普通银行	借	多明细	是	否	否	金额式");
			v.add("1-10202	银行存款-保证金	借	多明细	是	否	否	金额式");
			v.add("1-103	其他货币资金	借	单明细	是	否	是	金额式");
			v.add("1-111	短期投资	借	单明细	是	否	是	金额式");
			v.add("1-112	短期投资跌价准备	借	单明细	是	否	是	金额式");
			v.add("1-121	应收票据	借	按往来单位	是	否	是	金额式");
			v.add("1-122	应收帐款	借	按往来单位	是	否	是	设销帐");
			v.add("1-123	应收补贴款	借	单明细	是	否	是	金额式");
			v.add("1-124	应收股利	借	单明细	是	否	是	金额式");
			v.add("1-125	应收利息	借	单明细	是	否	是	金额式");
			v.add("1-126	机构应收	借	按机构	是	否	是	金额式");
			v.add("1-129	其他应收款	借	单明细	是	是	否	金额式");
			v.add("1-12901	其他应收款-备用金	借	按职员	是	否	否	金额式");
			v.add("1-12902	其他应收款-其他	借	按往来单位	是	否	否	金额式");
			v.add("1-12903	其他应收款-机构 往来	借	按机构	是	否	是	金额式");
			v.add("1-12904	其他应收款—个人	借	多明细	是	否	否	设销帐");
			v.add("1-12905	其它应收款—个人不设销帐	借	多明细	是	否	是	金额式");
			v.add("1-12906	其他应收款—押金	借	多明细	是	否	否	金额式");
			v.add("1-131	坏账准备	借	单明细	是	否	否	金额式");
			v.add("1-132	预付帐款	借	按往来单位	是	否	是	设销帐");
			v.add("1-133	低值易耗品	借	单明细	是	否	是	金额式");
			v.add("1-134	商品采购	借	单明细	是	否	是	金额式");
			v.add("1-135	库存商品	借	单明细	是	否	是	不分批次数量金额式");
			v.add("1-136	包装物	借	单明细	是	否	是	不分批次数量金额式");
			v.add("1-137	发出商品	借	单明细	是	否	是	不分批次数量金额式");
			v.add("1-138	分期收款发出商品	借	单明细	是	否	是	不分批次数量金额式");
			v.add("1-139	委托代销商品	借	单明细	是	否	是	不分批次数量金额式");
			v.add("1-140	受托代销商品	借	单明细	是	否	是	不分批次数量金额式");
			v.add("1-142	商品进销差价	借	单明细	是	否	是	金额式");
			v.add("1-145	加工商品	借	单明细	是	否	否	金额式");
			v.add("1-148	存货跌价准备	借	单明细	是	否	是	金额式");
			v.add("1-151	待摊费用	借	多明细	是	否	是	金额式");
			v.add("1-161	长期投资	借	单明细	是	是	是	金额式");
			v.add("1-16101	长期投资-长期股权投资	借	单明细	是	否	是	金额式");
			v.add("1-16102	长期投资-长期债权投资	借	单明细	是	否	是	金额式");
			v.add("1-162	长期投资减值准备	借	单明细	是	否	是	金额式");
			v.add("1-171	固定资产	借	单明细	是	否	否	金额式");
			v.add("1-175	累计折旧	借	单明细	是	否	否	金额式");
			v.add("1-176	固定资产减值准备	借	单明细	是	否	是	金额式");
			v.add("1-177	固定资产清理	借	单明细	是	否	否	金额式");
			v.add("1-180	工程物资	借	单明细	是	否	是	金额式");
			v.add("1-181	在建工程	借	单明细	是	否	是	金额式");
			v.add("1-182	在建工程减值准备	借	单明细	是	否	是	金额式");
			v.add("1-191	待处理财产损益	借	单明细	是	是	否	金额式");
			v.add("1-19101	待处理流动资产净损失	借	单明细	是	否	是	金额式");
			v.add("1-19102	待处理固定资产净损失	借	单明细	是	否	是	金额式");
			v.add("1-195	无形资产	借	单明细	是	否	是	金额式");
			v.add("1-196	递延资产	借	单明细	是	否	是	金额式");
			v.add("1-197	长期待摊费用	借	多明细	是	否	是	金额式");
			v.add("1-198	递延税款	借	单明细	是	否	是	金额式");
			v.add("1-201	短期借款	贷	多明细	是	否	否	金额式");
			v.add("1-203	应付票据	贷	按往来单位	是	否	是	金额式");
			v.add("1-204	应付帐款	贷	按往来单位	是	否	是	设销帐");
			v.add("1-205	预收帐款	贷	按往来单位	是	否	是	设销帐");
			v.add("1-206	机构应付	贷	按机构	是	否	是	金额式");
			v.add("1-207	代销商品款	贷	单明细	是	否	是	金额式");
			v.add("1-211	其他应付款	贷	单明细	是	是	否	金额式");
			v.add("1-21101	其他应付款-往来单位	贷	按往来单位	是	否	否	金额式");
			v.add("1-21102	其他应付款-机构往来	贷	按机构	是	否	是	金额式");
			v.add("1-21103	其他应付款-代垫费用	贷	单明细	是	否	是	金额式");
			v.add("1-21104	其它应付款-个人	贷	多明细	是	否	是	设销帐");
			v.add("1-221	应付工资	贷	单明细	是	否	是	金额式");
			v.add("1-222	应付福利费	贷	单明细	是	否	是	金额式");
			v.add("1-225	应付股利	贷	单明细	是	否	是	金额式");
			v.add("1-231	应交税金	贷	单明细	是	是	是	金额式");
			v.add("1-23101	应交税金—增值税进项	贷	单明细	是	否	是	金额式");
			v.add("1-23102	应交税金—增值税销项	贷	单明细	是	否	是	设销帐");
			v.add("1-232	其他应交款	贷	单明细	是	否	是	金额式");
			v.add("1-241	预提费用	贷	单明细	是	否	是	金额式");
			v.add("1-251	长期借款	贷	单明细	是	否	是	金额式");
			v.add("1-252	应付债券	贷	单明细	是	否	是	金额式");
			v.add("1-253	长期应付款	贷	单明细	是	否	是	金额式");
			v.add("1-254	专项应付款	贷	单明细	是	否	是	金额式");
			v.add("1-301	实收资本	贷	单明细	是	否	否	金额式");
			v.add("1-311	资本公积	贷	单明细	是	否	是	金额式");
			v.add("1-312	盈余公积	贷	单明细	是	否	是	金额式");
			v.add("1-321	本年利润	贷	单明细	是	否	是	金额式");
			v.add("1-322	利润分配	贷	单明细	是	否	否	金额式");
			v.add("1-501	商品销售收入	贷	单明细	是	是	否	金额式");
			v.add("1-50101	商品销售收入-销售收入	贷	单明细	是	否	是	金额式");
			v.add("1-50102	商品销售收入-调拨收入	贷	单明细	是	否	是	金额式");
			v.add("1-511	商品销售成本	借	单明细	是	否	是	金额式");
			v.add("1-512	商品调拨成本	借	单明细	是	否	是	金额式");
			v.add("1-517	销售费用	借	单明细	是	是	否	金额式");
			v.add("1-51701	销售费用-销售折扣	借	按部门	是	否	是	金额式");
			v.add("1-51702	销售费用-赠送品	借	单明细	是	否	是	金额式");
			v.add("1-51703	销售费用-快递费	借	按部门	是	否	是	金额式");
			v.add("1-51704	拆分费用	借	单明细	是	否	否	金额式");
			v.add("1-51705	销售费用-广告费	借	单明细	是	否	是	金额式");
			v.add("1-521	商品销售税金及附加	借	单明细	是	否	是	金额式");
			v.add("1-531	营业外收入	贷	单明细	是	否	是	金额式");
			v.add("1-541	其他业务收入	贷	单明细	是	是	是	金额式");
			v.add("1-54101	其他业务收入-采购折扣	贷	单明细	是	否	否	金额式");
			v.add("1-54102	其他业务收入-采购赠送品	贷	单明细	是	否	否	金额式");
			v.add("1-54103	其他业务收入-其他收入	贷	单明细	是	否	是	金额式");
			v.add("1-542	投资收益	贷	单明细	是	否	是	金额式");
			v.add("1-543	补贴收入	贷	单明细	是	否	是	金额式");
			v.add("1-545	其他业务支出	借	单明细	是	否	是	金额式");
			v.add("1-547	营业外支出	借	单明细	是	否	是	金额式");
			v.add("1-552	管理费用	借	单明细	是	是	否	金额式");
			v.add("1-55201	管理费用-工资	借	按部门	是	否	是	金额式");
			v.add("1-55202	管理费用-返利	借	按部门	是	否	是	金额式");
			v.add("1-55203	管理费用-水电费	借	按部门	是	否	是	金额式");
			v.add("1-55204	管理费用-办公费	借	按部门	是	否	是	金额式");
			v.add("1-55205	管理费用-交通费用	借	按部门	是	否	是	金额式");
			v.add("1-55206	管理费用-折旧费	借	按部门	是	否	是	金额式");
			v.add("1-55207	管理费用-业务招待费	借	按部门	是	否	是	金额式");
			v.add("1-55208	管理费用-坏账损失	借	按部门	是	否	是	金额式");
			v.add("1-55209	管理费用-其他费用	借	按部门	是	否	是	金额式");
			v.add("1-55210	管理费用-汽油费	借	按部门	是	否	是	金额式");
			v.add("1-55211	管理费用-到货运费	借	按部门	是	否	是	金额式");
			v.add("1-55212	管理费用-发货运费	借	按部门	是	否	是	金额式");
			v.add("1-55213	管理费用-税金	借	按部门	是	否	是	金额式");
			v.add("1-55214	管理费用-电话费	借	按部门	是	否	是	金额式");
			v.add("1-55215	管理费用-汽车维修费	借	按部门	是	否	是	金额式");
			v.add("1-55216	管理费用-租金	借	按部门	是	否	是	金额式");
			v.add("1-55217	管理费用-配货运费	借	按部门	是	否	是	金额式");
			v.add("1-55218	管理费用-利息	借	按部门	是	否	是	金额式");
			v.add("1-55219	管理费用-李经理	借	单明细	是	否	是	金额式");
			v.add("1-55220	管理费用-朱总	借	按部门	是	否	是	金额式");
			v.add("1-55221	管理费用-对表机费用	借	按部门	是	否	是	金额式");
			v.add("1-55222	管理费用-低值易耗品	借	按部门	是	否	是	金额式");
			v.add("1-55223	管理费用-融资费用	借	按部门	是	否	是	金额式");
			v.add("1-555	财务费用	借	单明细	是	否	是	金额式");
			v.add("1-571	所得税	借	单明细	是	否	是	金额式");
			v.add("1-911	职员贡献积分	借	按职员	否	否	否	金额式");
			v.add("1-912	职员销售定价	借	按职员	否	否	否	金额式");
			v.add("1-921	客户积分	借	按往来单位	否	否	否	金额式");
			v.add("1-922	客户销售定价	借	按往来单位	否	否	否	金额式");
			v.add("1-931	发票	借	按往来单位	否	否	否	金额式");
			v.add("1-941	代垫费用中间科目	借	单明细	否	否	是	金额式");
			v.add("1-942	加工费用中间科目	借	单明细	否	否	是	金额式");
			for (String line : v) {
				String[] ls = line.split("\t");
				GlSubject bean = new GlSubject().init();
				String code = ls[0].split("-")[1];
				bean.setTemplat(1);
				if (code.length() == 3)
					bean.setCode(code);
				else {
					bean.setCode(code.substring(3));
					bean.stSubjectUp(GlSubject.chkUniqueTempCode(false, 1, code.substring(0, 3)));
				}
				bean.setName(ls[1]);
				bean.stDirect(Gl.ODirect.CR);
				if (ls[2].equals("借"))
					bean.stDirect(Gl.ODirect.DR);
				if (ls[3].equals("单明细"))
					bean.stAccType(Gl.OAccType.ONE);
				else if (ls[3].equals("多明细"))
					bean.stAccType(Gl.OAccType.MUCH);
				else if (ls[3].equals("按机构"))
					bean.stAccType(Gl.OAccType.ORG);
				else if (ls[3].equals("按部门"))
					bean.stAccType(Gl.OAccType.DEPT);
				else if (ls[3].equals("按职员"))
					bean.stAccType(Gl.OAccType.EM);
				else if (ls[3].equals("按往来单位")) {
					if (code.startsWith("1"))
						bean.stAccType(Gl.OAccType.CUSTOM);
					else
						bean.stAccType(Gl.OAccType.SUPPLIER);
				}
				bean.stInFlag(true);
				bean.stTotalFlag(true);
				bean.stAutoCrt(true);
				bean.stWriteoffFlag(false);
				bean.stAccJournalType(Gl.OAccJournalType.AMT);
				if (ls[4].equals("否"))
					bean.stInFlag(false);
				if (ls[5].equals("否"))
					bean.stTotalFlag(false);
				if (ls[6].equals("否"))
					bean.stAutoCrt(false);
				if (ls[7].equals("设销帐"))
					bean.stWriteoffFlag(true);
				else if (ls[7].contains("数量"))
					bean.stAccJournalType(Gl.OAccJournalType.QTY_AMT);
				bean.stSubjectKind(Gl.OSubjectKind.XJ);
				bean.stCurrency(Sys.OCurrency.RMB);
				bean.stEnabled(true);
				bean.stTallyFlag(Gl.OTallyFlag.ONE);
				bean.stUseScope(Gl.OUseScope.ALL);
				GlSubjectDAO.Ins ins = new GlSubjectDAO.Ins();
				ins.setB(bean);
				ins.commit();
			}
		}

		public static void main(String[] args) throws Exception {
			Env.INST.getDB();
			importGl();
			DbPool.getInstance().getConn().commit();
			DbPool.getInstance().releaseAll();
		}

}
