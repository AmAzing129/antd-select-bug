import { useState } from "react";
import { Modal, Button, Select, ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";

export default function HomePage() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Button onClick={() => setOpen(true)}>点击打开全局弹窗</Button>
			<ConfigProvider getPopupContainer={() => window.parent.document.body}>
				<StyleProvider container={window.parent.document.head}>
					<Modal onCancel={() => setOpen(false)} open={open}>
						<Select
							value={11111}
							options={[
								{ value: "normal", label: "普通" },
								{ value: "emergency", label: "紧急" },
							]}
						/>
					</Modal>
				</StyleProvider>
			</ConfigProvider>
		</>
	);
}
